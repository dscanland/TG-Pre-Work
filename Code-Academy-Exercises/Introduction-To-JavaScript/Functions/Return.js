function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

// I learned that is order to get the function to pass back the recorded value of the function computation you need to use the return keyword
