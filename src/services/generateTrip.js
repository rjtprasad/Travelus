import { chatSession } from "../geminiAi/GeminiApi";
import useApp from "../hook/useApp";

export const generateTrip = async (prompt, docId, formData) => {
  const { createTrip } = useApp();
  console.log(prompt);

  try {
    const result = await chatSession.sendMessage(prompt);
    console.log(result?.response?.text());
    await createTrip(docId, formData, result?.response?.text());
  } catch (error) {
    console.log(error);
  }
};
