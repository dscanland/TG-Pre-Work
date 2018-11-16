const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint');
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
}

// I learned how to recreate the async and await GET function. and that an await can only be used in an async function and that an await function allows other functions to run while its waiting for the promise statement 
