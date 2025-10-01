# Officient MCP Server

A Model Context Protocol (MCP) server for the [Officient](https://www.officient.io/) API, providing seamless integration with Claude and other MCP-compatible clients.

## Features

This MCP server exposes 9 tools for interacting with the Officient API:

- **list_people** - Get a paginated list of people
- **list_all_people** - Get all people with automatic pagination
- **get_person_detail** - Get detailed information about a specific person
- **get_employee_details** - Get details of the current logged-in employee
- **list_coworkers_days_off** - Get coworkers' days off for a specific month
- **list_own_days_off** - Get your own days off for a specific year
- **get_all_salary_slips** - Get all salary slip files
- **get_file_download_url** - Get download URL for a file (e.g., salary slip PDF)
- **get_vacation_day_budgets** - Get vacation day budgets for a specific year

## Installation

1. Clone this repository:
```bash
git clone https://github.com/bitterpanda63/officient-mcp-server.git
cd officient-mcp-server
```

2. Install dependencies:
```bash
npm install
```

3. Build the TypeScript files:
```bash
npm run build
```

4. Create a `.env` file with your Officient token:
You can get this officient token by inspecting a request when logged in and copying the bearer from the `Authselfservice` header.
```bash
cp .env.example .env
# Edit .env and add your OFFICIENT_TOKEN
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
OFFICIENT_TOKEN=your_officient_token_here
```

To get your Officient token:
1. Log in to your Officient account
2. Open browser developer tools (F12)
3. Go to Network tab
4. Make any request to Officient
5. Look for the `Authselfservice` header in the request

### MCP Client Configuration

Add this server to your MCP client configuration (e.g., Claude Desktop):

```json
{
  "mcpServers": {
    "officient": {
      "command": "node",
      "args": [
        "/path/to/officient-mcp-server/build/index.js"
      ],
      "env": {
        "OFFICIENT_TOKEN": "your_token_here"
      }
    }
  }
}
```

## Usage

### With Claude Desktop

Once configured, you can use natural language to interact with Officient:

- "List all people in my company"
- "Show me details for person ID 12345"
- "What are my days off this year?"
- "Get my salary slips"
- "Who is on vacation in October 2025?"


### Build

```bash
# Build once
npm run build

# Watch mode (development)
npm run dev
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
