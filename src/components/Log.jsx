export default function Log({ logs }) {
    return (
      <ol id="log">
        {logs.map((log, index) => {
          // Determine the value ('X' or 'O') based on log[0]
          const val = log[0] == 0 ? 'X' : 'O';
          
          return (
            <li key={index}>
              {`${val} selected ${log[1]},${log[2]}`}
            </li>
          );
        })}
      </ol>
    );
  }
  