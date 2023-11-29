# Canvas Discussion Board Response Generator

Chrome extension to quickly generate responses to your peer's Canvas discussion board posts. It utilizes OpenAI's API to process selected text and suggest responses appropriate for high school, college, or expert-level discussions.

## Features

- **Context Menu Integration**: Right-click to access the extension's features directly from the context menu after selecting text on any webpage.
- **Response Level Selection**: Choose the complexity of the generated response from the popup's dropdown menu.
- **Word Count Specification**: Set minimum and maximum word counts for the generated responses.
- **Immediate Feedback**: Receive visual confirmation when text is copied to the clipboard.

## How to Use

1. Select text on any webpage that you want to use as a basis for generating a response.
2. Right-click to open the context menu and click on "Respond to this" to activate the extension.
3. A popup window will appear where you can select the response level and specify word count.
4. Click "Generate" to receive a custom response based on your selections.
5. Click on the response text to copy it to your clipboard.

## Installation

To install the extension:

1. Clone the repository to your local machine using `git clone https://github.com/yourusername/canvas-response-generator.git`.
2. Navigate to `chrome://extensions/` in the Google Chrome browser.
3. Enable "Developer mode" at the top right.
4. Click "Load unpacked" and select the `dist` folder from the cloned repository.
5. The extension should now be installed and visible in your extensions list.
6. Create a `.env` file in your root directory and create `OPENAI_API_KEY` and paste you OpenAi api key.


### Available Scripts

In the project directory, you can run:

- `npm run build` - Builds the app for production to the `dist` folder.

### Building for Production

Before deploying, make sure to compile the project with `npm run build`. The `dist` folder will contain all the necessary files to load the extension into Chrome.
