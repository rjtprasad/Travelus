const conf = {
  GOOGLE_PLACE_API_KEY: String(import.meta.env.VITE_GOOGLE_PLACE_API_KEY),
  GEMINI_API_KEY: String(import.meta.env.VITE_GEMINI_API_KEY),
  GOOGLE_AUTH_CLIENT_ID: String(import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID),
};

export default conf;
