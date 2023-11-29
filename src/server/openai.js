
import OpenAI from 'openai';

export const generateResponse = async (promptText) => {
    // Define your API request payload based on the requirements of the OpenAI API

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    try {

        const response = await openai.completions.create({
            model: "text-davinci-003",
            prompt: promptText.prompt,
            max_tokens: 200,
        });

        return response;
    } catch (error) {
        console.error('Error during OpenAI API call:', error);
        throw error;
    }
};