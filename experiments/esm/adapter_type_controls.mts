/**
 * Verifies packed adapter return types preserve their peer-package identity.
 *
 * LangChain and MCP expose nominal peer-owned types, so a declaration mode
 * split can make one physical peer installation appear as unrelated types.
 * Vercel is the adjacent structural control.
 *
 * 1. Import each peer-owned type from the consumer's resolution context.
 * 2. Assign each packed adapter result to that consumer-owned type.
 * 3. Compile the same source as Node ESM, Node CJS, and Bundler ESM.
 */
import type { DynamicStructuredTool } from "@langchain/core/tools";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { toLangChainTools } from "@typia/langchain";
import { createMcpServer } from "@typia/mcp";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";

declare const controller: Parameters<typeof createMcpServer>[0];

const langchain: DynamicStructuredTool[] = toLangChainTools(controller);
const mcp: McpServer = createMcpServer(controller);
const vercel: Record<string, Tool> = toVercelTools(controller);

void langchain;
void mcp;
void vercel;
