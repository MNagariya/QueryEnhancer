# Query Enhancer

A web application that enhances user queries using AI to make them more professional, clear, and detailed. The application consists of a React frontend and a Flask backend.

## Project Structure
```
query-enhancer/
│
├── backend/
│   ├── enhancer.py
│   ├── requirements.txt
│   └── .env
│
└── frontend/
    ├── public/
    ├── src/
    └── package.json
```

## Backend Setup

### Prerequisites
- Python 3.8 or higher
- pip (Python package installer)

### Setup Instructions

1. Create and activate a virtual environment:

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Configure environment variables:
- Create a `.env` file in the backend directory
- Add your OpenAI API key:

```bash
OPENAI_API_KEY="your-api-key-here"
```

4. Run the Flask server:

```bash
# Make sure you're in the backend directory
python enhancer.py
```

The backend server will start running on `http://localhost:5000`

## Frontend Setup

### Prerequisites
- Node.js 14.0 or higher
- npm (Node package manager)

### Setup Instructions

1. Install dependencies:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
```

2. Run the development server:

```bash
npm start
```

The frontend application will start running on `http://localhost:3000`

## Using the Application

1. Open your browser and navigate to `http://localhost:3000`
2. Enter your query in the text area
3. Click the enhance button (pencil icon) to see enhancement options:
   - Rephrase this
   - Correct grammar
   - Correct spellings
4. Select an enhancement option to improve your query
5. Click the send button (paper plane icon) to submit your enhanced query

## API Endpoints

### POST /enhance
Enhances a given query based on the specified instruction.

Request body:
```json
{
    "Instruction": "Rephrase this|Correct grammar|Correct spellings",
    "Query": "your query text"
}
```

Response:
```json
{
    "EnhancedQuery": "enhanced query text"
}
```

## Error Handling

The application includes error handling for:
- Missing API key
- Invalid requests
- Server errors
- Network issues

## Technologies Used

Backend:
- Flask
- OpenAI API
- Python-dotenv
- Flask-CORS

Frontend:
- React
- CSS3
- SVG Icons

## Notes

- Make sure both backend and frontend servers are running simultaneously for the application to work properly
- Keep your OpenAI API key secure and never commit it to version control
- The application requires an active internet connection to communicate with the OpenAI API

## Troubleshooting

1. If the backend fails to start:
   - Check if the virtual environment is activated
   - Verify the OpenAI API key is correctly set in .env
   - Ensure all dependencies are installed

2. If the frontend fails to start:
   - Check if Node.js is installed correctly
   - Verify all dependencies are installed
   - Make sure the required ports (3000) are available

3. If enhancements fail:
   - Check if the backend server is running
   - Verify your internet connection
   - Check the browser console for error messages

## Available Frontend Scripts

### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

Ejects the build configuration for full control over configurations.