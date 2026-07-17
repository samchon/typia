import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { createMcpServer } from "@typia/mcp";
import typia, { tags } from "typia";

/**
 * Verifies tool output constraints are enforced in both schema modes.
 *
 * `createMcpServer` validates a declared result by inverting its LLM schema,
 * and the two modes keep constraints in different places: a non-strict schema
 * keeps `minimum` and `format` as keywords, while a strict one moves them into
 * the description as `@minimum 0` tags. The inverter only reads those tags back
 * when told the schema is strict, so the registrar has to hand it the
 * application's own config — and every property here is documented, because a
 * description is exactly what used to make the non-strict keywords disappear.
 *
 * The strict controller's `config.strict` is corrected before it is served.
 * `typia.llm.application`/`controller` emit `config: { strict: false }`
 * whatever the `Config` generic says, even while shifting the constraints into
 * the description — the emitted config contradicts the schema beside it,
 * against `ILlmApplication.config`'s own contract. That is a separate transform
 * defect; this case pins the registrar's plumbing against the config the
 * contract promises rather than the one typia currently emits.
 *
 * 1. Serve the same documented controller twice, once non-strict and once strict.
 * 2. Assert a conforming result is accepted and shipped as structured content.
 * 3. Assert a result violating `Minimum` is reported as a tool error in both
 *    modes.
 * 4. Assert the same for a result violating `Format<"email">`.
 */
export const test_mcp_tool_output_constraint_enforcement =
  async (): Promise<void> => {
    const strict: ILlmController = typia.llm.controller<
      ConstraintController,
      { strict: true }
    >("constraint", new ConstraintController());
    strict.application.config.strict = true;

    const controllers: [string, ILlmController][] = [
      [
        "non-strict",
        typia.llm.controller<ConstraintController>(
          "constraint",
          new ConstraintController(),
        ),
      ],
      ["strict", strict],
    ];
    for (const [mode, controller] of controllers) {
      const server: McpServer = createMcpServer(controller);
      const client: Client = new Client({
        name: "constraint-test",
        version: "1.0",
      });
      const [clientTransport, serverTransport] =
        InMemoryTransport.createLinkedPair();

      try {
        await server.connect(serverTransport);
        await client.connect(clientTransport);

        const valid: CallToolResult = (await client.callTool({
          name: "read",
          arguments: { variant: "valid" },
        })) as CallToolResult;
        TestValidator.predicate(
          `${mode} conforming output accepted`,
          valid.isError !== true,
        );
        TestValidator.equals(
          `${mode} conforming structured content`,
          valid.structuredContent,
          {
            id: "u1",
            age: 20,
            email: "member@typia.io",
          },
        );

        for (const [variant, path] of [
          ["minimum", "$input.age"],
          ["format", "$input.email"],
        ] as const) {
          const result: CallToolResult = (await client.callTool({
            name: "read",
            arguments: { variant },
          })) as CallToolResult;
          TestValidator.predicate(
            `${mode} ${variant} violation is a tool error`,
            result.isError === true && result.structuredContent === undefined,
          );
          TestValidator.predicate(
            `${mode} ${variant} violation reports its path`,
            getText(result).includes(path),
          );
        }
      } finally {
        await Promise.allSettled([client.close(), server.close()]);
      }
    }
  };

class ConstraintController {
  /** Return a member selected by the test variant. */
  read(input: ConstraintController.IInput): ConstraintController.IMember {
    const valid: ConstraintController.IMember = {
      id: "u1",
      age: 20,
      email: "member@typia.io",
    };
    switch (input.variant) {
      case "valid":
        return valid;
      case "minimum":
        return { ...valid, age: -5 };
      case "format":
        return { ...valid, email: "not-an-email" };
    }
  }
}

namespace ConstraintController {
  export interface IInput {
    /** Which member to return. */
    variant: "valid" | "minimum" | "format";
  }
  export interface IMember {
    /** How the member is identified. */
    id: string;
    /** How old the member is. */
    age: number & tags.Minimum<0>;
    /** Where to reach the member. */
    email: string & tags.Format<"email">;
  }
}

const getText = (result: CallToolResult): string => {
  const content = result.content[0];
  return content?.type === "text" ? content.text : "";
};
