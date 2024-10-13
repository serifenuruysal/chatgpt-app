
# Django OpenAI Chatbot

A simple chatbot application built using Django and OpenAI’s GPT-3.5-turbo model for generating AI-powered responses.

## Features

- Integration with OpenAI’s GPT-3.5-turbo API
- REST API endpoint to receive and respond to user messages
- Environment variable configuration for sensitive information (API keys)
- Logging for debugging and monitoring

## Requirements

- Python 3.11
- Django 5.x
- OpenAI Python client library (`openai>=1.0.0`)
- Django REST Framework
- `python-dotenv` for environment variable management

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/your-repository-name.git
cd your-repository-name
```

### 2. Set up a virtual environment (optional but recommended)

```bash
python3 -m venv venv
source venv/bin/activate  # For Linux/Mac
# or
venv\Scripts\activate  # For Windows
```

### 3. Install the required packages

```bash
pip install -r requirements.txt
```

### 4. Set up the `.env` file

Create a `.env` file in the root of your project folder and add your OpenAI API key:

```bash
OPENAI_API_KEY=your_openai_api_key_here
```

### 5. Run database migrations

```bash
python manage.py migrate
```

### 6. Start the development server

```bash
python manage.py runserver
```

The application should now be running on `http://localhost:8000`.

## API Endpoints

- **POST /api/chat/**  
  Sends a user message and receives a response from the AI.

### Sample Request

```bash
curl -X POST -H "Content-Type: application/json" -d '{"message": "Hello"}' http://localhost:8000/api/chat/
```

### Sample Response

```json
{
  "message": "Hello! How can I assist you today?"
}
```

## Error Handling

- If an invalid OpenAI API key is provided, the server will return a 401 error.
- Additional errors are logged for debugging purposes.

## File Structure

```
.
├── api/
│   ├── views.py        # Contains the chat view logic
│   └── urls.py         # API URLs
├── django_project/
│   ├── settings.py     # Django settings file (ensure to load .env)
│   └── urls.py         # Project-wide URL routing
├── manage.py           # Django management script
├── .env                # Environment variables
├── requirements.txt    # Python dependencies
└── README.md           # Project documentation (this file)
```

## Logging

Logging is set up to capture important debugging information, including the request and response details. It is recommended to monitor these logs during development and in production to catch any issues.

## Contributing

Feel free to submit issues, fork the repository, and send pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
