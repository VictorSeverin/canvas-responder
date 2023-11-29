
import OpenAI from 'openai';

export const generateResponse = async (promptText) => {

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
