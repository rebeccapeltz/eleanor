 // fetchData.js

 export async function fetchData(path) {
  try {
    const baseUrl = process.env.VITE_PROD_ENV === 'true' ? process.env.VITE_PROD_BASE_API : process.env.VITE_DEV_BASE_API;
    const url = `${baseUrl}/${path}`;
    const response = await fetch(url);
    debugger
    //const response = "test"
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching HelloRequest data:', error);
    throw error; // Re-throw the error to handle it in the component
  }
}

// export async function fetchHelloData() {
//   try {
//     const baseUrl = process.env.PROD_ENV ? process.env.PROD_BASE_API : process.env.DEV_BASE_API;
//     const url = `{baseUrl}/.netlify/functions/hello`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching HelloRequest data:', error);
//     throw error; // Re-throw the error to handle it in the component
//   }
// }
//  fetch("http://localhost:8888/.netlify/functions/hello")
//       .then((response) => response.json())
//       .then((json) => {
//         debugger
//         let output = json.message;
//         let outputLessQuotes = output.substring(1, output.length-3);
//         setTranscript(outputLessQuotes);
//         setResponse(outputLessQuotes);
//       })
//       .catch((error) => console.error(error));

//     return () => {
//       console.log("App is unmounting");
//     };