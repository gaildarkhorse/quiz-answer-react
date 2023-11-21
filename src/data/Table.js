import React from 'react';
import ReactDOMServer from 'react-dom/server';
import HomepageToPDF from './ConvertToPDF';

const heading1 = ['SELF-PRESERVATION', 'SEXUAL', 'ADAPTATION/SOCIAL'];
const heading2 = ['SP health', 'SP res', 'SP home', 'SX magn', 'SX exp', 'SX merg', 'SO read', 'SO bond', 'SO part'];
const resultData = [3, 9, 8, 6, 9, 10, 8, 9, 10];

const ColoredTable = () => {

  const rows = 17;
  const columns = 9;
  const cellheight = 40; // Size in pixels
  const cellwidth = 120;
  const borderColor = 'black';

  const firstGroupColor = '#CCCC00';
  const secondGroupColor = '#00CCCC';
  const thirdGroupColor = '#CC00CC';

  const colorSet = [firstGroupColor, secondGroupColor, thirdGroupColor];

  const genCellColor = (row, col) => {
    if (row >= rows - resultData[col]) {
      return colorSet[Math.floor(col / 3)];
    } else {
      return '#FFFFFF';
    }
  };

  const renderTable = () => {
    const table = [];
    const heading = [];
    for (let j = 0; j < heading1.length; j++) {
      const headerStyle = {
        backgroundColor: colorSet[j],
        border: `1px solid ${borderColor}`,
      };
      heading.push(
        <th key={j} colspan="3" style={headerStyle}>
          {heading1[j]}
        </th>
      );
    }
    table.push(<tr key={0}>{heading}</tr>);
    console.log(heading);

    for (let i = 1; i < rows; i++) {
      const row = [];

      for (let j = 0; j < columns; j++) {
        const cellStyle = {
          backgroundColor: genCellColor(i, j),
          width: cellwidth,
          height: cellheight,
          border: `1px solid ${borderColor}`,
        };

        row.push(
          <td key={j} style={cellStyle}>
            {/* Empty cell */}
          </td>
        );
      }

      table.push(<tr key={i}>{row}</tr>);
    }

    // Add text to the first row
    table[1] = (
      <tr key={1}>
        {table[1].props.children.map((cell, index) => (
          <td key={index} style={cell.props.style}>
            {heading2[index]}
          </td>
        ))}
      </tr>
    );


    return table;
  };

  const handleNewClick = () => {
    const newWindow = window.open('', '_blank');
    const tableHtml = ReactDOMServer.renderToString(
      <table>
        <tbody>{renderTable()}</tbody>
      </table>
    );
    const downLoadButton = ReactDOMServer.renderToString(
      <div>
        {<HomepageToPDF />}
      </div>
    )
    newWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Colored Table</title>
          <style>
            table {
              border-collapse: collapse;
            }
            td {
              text-align: center;
            }
          </style>
        </head>
        <body>
          <h1>
            <Center>Personal Instinct</Center>
          </h1>  
          <center>${tableHtml}</center>
          ${<HomepageToPDF />}
        </body>
      </html>
    `);

    newWindow.document.close();
  };

  return (
    <div>
      <table>
        <tbody>{renderTable()}</tbody>
      </table>
      <br/> 
      <button onClick={handleNewClick}>View Result</button>
      <br />  
    </div>
  );

};

export default ColoredTable;