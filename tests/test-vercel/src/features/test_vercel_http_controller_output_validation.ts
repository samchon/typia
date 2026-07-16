import { TestValidator } from "@nestia/e2e";
import { IHttpLlmController, OpenApiV3_1 } from "@typia/interface";
import { HttpLlm } from "@typia/utils";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";

/**
 * Verifies HTTP controller bodies obey their advertised Vercel output schema.
 *
 * HTTP tools execute a response-body adapter distinct from class methods. Its
 * valid data must use the typed success branch, while wrong response bodies and
 * thrown executor errors must use the same advertised failure branch.
 *
 * 1. Reflect a minimal HTTP operation with a nested response object.
 * 2. Accept a valid body through the public Vercel tool.
 * 3. Reject a wrong nested body with an actionable validation path.
 * 4. Preserve a thrown HTTP executor exception in the failure branch.
 */
export const test_vercel_http_controller_output_validation =
  async (): Promise<void> => {
    const controller: IHttpLlmController = HttpLlm.controller({
      name: "http-output",
      document: document(),
      connection: { host: "http://localhost:0" },
      execute: async (props) => {
        const { variant } = (props.arguments as { body: { variant: Variant } })
          .body;
        if (variant === "throw") throw new Error("http execution failed");
        return {
          status: 200,
          headers: {},
          body:
            variant === "valid"
              ? { value: 1, nested: { label: "valid" } }
              : { value: 1, nested: { label: 42 } },
        };
      },
    });
    const tools: Record<string, Tool> = toVercelTools(controller);
    const tool: Tool = tools[controller.application.functions[0]!.name]!;

    const valid: unknown = await execute(tool, "valid");
    TestValidator.equals("valid HTTP body uses the success branch", valid, {
      success: true,
      data: { value: 1, nested: { label: "valid" } },
    });

    const invalid = (await execute(tool, "invalid")) as {
      success?: boolean;
      error?: string;
    };
    TestValidator.predicate(
      "invalid HTTP body uses the actionable failure branch",
      invalid.success === false &&
        typeof invalid.error === "string" &&
        invalid.error.includes('Type errors in "read_post" output:') &&
        invalid.error.includes('"path":"$input.nested.label"'),
    );

    const thrown = (await execute(tool, "throw")) as {
      success?: boolean;
      error?: string;
    };
    TestValidator.predicate(
      "HTTP executor exception remains a failure result",
      thrown.success === false &&
        typeof thrown.error === "string" &&
        thrown.error.includes("http execution failed"),
    );
  };

type Variant = "valid" | "invalid" | "throw";

const execute = (tool: Tool, variant: Variant): Promise<unknown> =>
  tool.execute!(
    { body: { variant } },
    {
      toolCallId: `test-http-${variant}-output`,
      messages: [],
      abortSignal: undefined as any,
    },
  );

const document = (): OpenApiV3_1.IDocument => ({
  openapi: "3.1.0",
  info: { title: "Output validation", version: "1.0.0" },
  paths: {
    "/read": {
      post: {
        operationId: "post_httpOutput_read",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  variant: {
                    type: "string",
                    enum: ["valid", "invalid", "throw"],
                  },
                },
                required: ["variant"],
                additionalProperties: false,
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Nested output",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    value: { type: "number" },
                    nested: {
                      type: "object",
                      properties: { label: { type: "string" } },
                      required: ["label"],
                      additionalProperties: false,
                    },
                  },
                  required: ["value", "nested"],
                  additionalProperties: false,
                },
              },
            },
          },
        },
      },
    },
  },
  components: {},
});
