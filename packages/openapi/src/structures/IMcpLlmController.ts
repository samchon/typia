import { IMcpLlmApplication } from "./IMcpLlmApplication";

/**
 * Controller of MCP function calling.
 *
 * `IMcpLlmController` is a controller of MCP function calling, containing not
 * only the {@link IMcpLlmApplication application} of
 * {@link IMcpLlmFunction function calling schemas}, but also
 * {@link name identifier name} of the application and {@link execute executor} of
 * MCP functions.
 *
 * Here is an example of using `IMcpLlmController` type for AI agent development
 * of performing AI function calling to e-commerce API functions through
 * `@agentica`.
 *
 * ```typescript
 * import { Agentica, assertMcpController } from "@wrtnlabs/agentica";
 * import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
 * import { Client } from "@modelcontextprotocol/sdk/client/index.js";
 *
 * const client = new Client({
 *   name: "calculator",
 *   version: "1.0.0",
 * });
 * await client.connect(new StdioClientTransport({
 *   command: "npx",
 *   args: ["-y", "@modelcontextprotocol/server-github"],
 *   env: {
 *     GITHUB_PERSONAL_ACCESS_TOKEN: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
 *     // Add other environment variables as needed
 *   }
 * }));
 *
 * const agent = new Agentica({
 *   model: "chatgpt",
 *   vendor: {
 *     api: new OpenAI({ apiKey: "*****"})
 *     model: "gpt-4o-mini"
 *   },
 *   controllers: [
 *     await assertMcpController({
 *       name: "calculator",
 *       client,
 *     }),
 *   ],
 * });
 * await agent.conversate("What can you do?");
 * ```
 *
 * For reference, this `IMcpLlmController` type is designed for MCP servers. If
 * you want to make a controller of another {@link protocol} like HTTP or
 * TypeScript, use below types instead:
 *
 * - {@link IHttpLlmController} for HTTP
 * - {@link ILlmController} for TypeScript
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @author Byeongjin Oh - https://github.com/sunrabbit123
 * @reference https://wrtnlabs.io/agentica/docs/core/controller/mcp/
 */
export interface IMcpLlmController {
  /** Protocol discriminator. */
  protocol: "mcp";

  /** Identifier name of the controller. */
  name: string;

  /** Application schema of function calling. */
  application: IMcpLlmApplication;
  /**
   * MCP client for connection.
   *
   * @warning You have to install `@modelcontextprotocol/sdk` package
   *          to use this type properly. If not, this type would work
   *          as an `any` type, so that you can't validate it.
   */
  // @ts-ignore
  client: import("@modelcontextprotocol/sdk/client/index.d.ts").Client;
}
