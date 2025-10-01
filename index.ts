#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

// Import all API services
import {
  listPeople,
  listAllPeople,
  getPersonDetail,
  getEmployeeDetails,
  listCoworkersDaysOff,
  listOwnDaysOff,
  getAllSalarySlips,
  getFileDownloadUrl,
  getVacationDayBudgets,
} from "./api/index.js";

// Create an MCP server
const server = new Server(
  {
    name: "officient-mcp-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "list_people",
        description: "Get a paginated list of people from Officient",
        inputSchema: {
          type: "object",
          properties: {
            page: {
              type: "number",
              description: "Page number (default: 0)",
              default: 0,
            },
            perPage: {
              type: "number",
              description: "Items per page (default: 10)",
              default: 10,
            },
            searchTerm: {
              type: "string",
              description: "Search term to filter people",
              default: "",
            },
            teamFilter: {
              type: "string",
              description: "Team filter",
              default: "",
            },
          },
        },
      },
      {
        name: "list_all_people",
        description: "Get all people from Officient with automatic pagination",
        inputSchema: {
          type: "object",
          properties: {
            perPage: {
              type: "number",
              description: "Items per page (default: 100)",
              default: 100,
            },
            searchTerm: {
              type: "string",
              description: "Search term to filter people",
              default: "",
            },
            teamFilter: {
              type: "string",
              description: "Team filter",
              default: "",
            },
          },
        },
      },
      {
        name: "get_person_detail",
        description: "Get detailed information about a specific person",
        inputSchema: {
          type: "object",
          properties: {
            personId: {
              type: "number",
              description: "Person ID",
            },
          },
          required: ["personId"],
        },
      },
      {
        name: "get_employee_details",
        description: "Get details of the current logged-in employee (yourself)",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "list_coworkers_days_off",
        description: "Get coworkers' days off for a specific month",
        inputSchema: {
          type: "object",
          properties: {
            year: {
              type: "number",
              description: "Year (e.g., 2025)",
            },
            month: {
              type: "number",
              description: "Month (1-12)",
            },
          },
          required: ["year", "month"],
        },
      },
      {
        name: "list_own_days_off",
        description: "Get your own days off for a specific year",
        inputSchema: {
          type: "object",
          properties: {
            year: {
              type: "number",
              description: "Year (e.g., 2025)",
            },
          },
          required: ["year"],
        },
      },
      {
        name: "get_all_salary_slips",
        description: "Get all salary slip files",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "get_file_download_url",
        description: "Get download URL for a file (e.g., salary slip PDF)",
        inputSchema: {
          type: "object",
          properties: {
            fileId: {
              type: "number",
              description: "File ID",
            },
          },
          required: ["fileId"],
        },
      },
      {
        name: "get_vacation_day_budgets",
        description: "Get vacation day budgets for a specific year",
        inputSchema: {
          type: "object",
          properties: {
            year: {
              type: "number",
              description: "Year (e.g., 2025)",
            },
          },
          required: ["year"],
        },
      },
    ],
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "list_people": {
        const result = await listPeople({
          page: args?.page as number | undefined,
          perPage: args?.perPage as number | undefined,
          searchTerm: args?.searchTerm as string | undefined,
          teamFilter: args?.teamFilter as string | undefined,
        });
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }

      case "list_all_people": {
        const result = await listAllPeople({
          perPage: args?.perPage as number | undefined,
          searchTerm: args?.searchTerm as string | undefined,
          teamFilter: args?.teamFilter as string | undefined,
        });
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }

      case "get_person_detail": {
        const result = await getPersonDetail(args?.personId as number);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }

      case "get_employee_details": {
        const result = await getEmployeeDetails();
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }

      case "list_coworkers_days_off": {
        const result = await listCoworkersDaysOff(args?.year as number, args?.month as number);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }

      case "list_own_days_off": {
        const result = await listOwnDaysOff(args?.year as number);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }

      case "get_all_salary_slips": {
        const result = await getAllSalarySlips();
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }

      case "get_file_download_url": {
        const result = await getFileDownloadUrl(args?.fileId as number);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }

      case "get_vacation_day_budgets": {
        const result = await getVacationDayBudgets(args?.year as number);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return {
      content: [
        {
          type: "text",
          text: `Error: ${errorMessage}`,
        },
      ],
      isError: true,
    };
  }
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Officient MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
