import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   define: {
//     'process.env': env,
//   },
//   server: {
//     proxy: {
//       "/.netlify/functions": "http://localhost:8888/.netlify/functions" // Replace with your backend server address
//     }
//   }
// })

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  console.log("defineConfig", env.NODE_ENV);
  return {
    plugins: [react()],
    define: {
      "process.env": env,
    },
    server: {
      proxy: {
        "/.netlify/functions": "http://localhost:8888/.netlify/functions", // Replace with your backend server address
      },
    },
  };
});
