from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Initialize OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def create_enhancement_prompt(instruction: str, query: str) -> str:
    """Create a prompt based on the instruction type."""
    
    prompts = f"""
    Role: You're a query enhancement specialist in a chatbot, which is used by users to enhance their messages and make them more clear.
    Task: Your task is to enhance the user's query according to their requirement and modify it to make it easier for end user/users to understand.
    
    examples:-
    
    Instruction- "Rephrase this"
    user_query- "How are you doing"
    Output-  "How's everything is going with you?"

    Instruction- "Correct grammar"
    user_query- "How is you doing?"
    Output-  "How are you doing?"

    Instruction- "Correct spellings"
    user_query-" hlw"
    Output-  "Hello"

    Instruction- {instruction}
    user_query- {query}
    Output-
    """
    
    return prompts

@app.route('/enhance', methods=['POST'])
def enhance_query():
    try:
        data = request.get_json()
        instruction = data.get('Instruction')
        query = data.get('Query')
        
        if not instruction or not query:
            return jsonify({'error': 'Missing required fields'}), 400
        
        # Create the appropriate prompt based on the instruction
        prompt = create_enhancement_prompt(instruction, query)
        
        # Updated OpenAI API call syntax
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are a helpful assistant that enhances user queries to be more professional, clear, and detailed."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=150,
            temperature=0.1
        )
        
        # Updated response handling
        enhanced_query = response.choices[0].message.content.strip('"')
        
        return jsonify({'EnhancedQuery': enhanced_query})
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)
