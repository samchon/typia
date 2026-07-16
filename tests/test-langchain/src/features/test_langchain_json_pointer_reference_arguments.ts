import {
  DynamicStructuredTool,
  ToolInputParsingException,
} from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import typia from "typia";

/**
 * Verifies LangChain resolves generated canonical local references.
 *
 * LangChain validates tool input against the advertised schema before typia's
 * own coercion runs, so this boundary is an independent JSON Schema oracle: it
 * can only reject a violation of the referenced definition after resolving
 * `#/$defs/RecursiveA~1B`. A fail-open reference would admit both negatives.
 *
 * 1. Advertise a recursive argument whose generated definition key contains `/`.
 * 2. Execute a valid recursive value through the real LangChain tool.
 * 3. Reject values violating only the referenced schema at LangChain's own gate.
 */
export const test_langchain_json_pointer_reference_arguments =
  async (): Promise<void> => {
    const controller: ILlmController<PointerService> =
      typia.llm.controller<PointerService>("pointer", new PointerService());
    const tool: DynamicStructuredTool = toLangChainTools({
      controllers: [controller],
    })[0]!;
    TestValidator.predicate("advertises a canonical slash reference", () =>
      JSON.stringify(controller.application).includes(
        '"$ref":"#/$defs/RecursiveA~1B"',
      ),
    );

    const tree: Recursive<"A/B"> = {
      value: "A/B",
      count: 42,
      children: [{ value: "A/B", count: 7, children: [] }],
    };
    const valid = await tool.invoke({ input: tree });
    TestValidator.equals("valid referenced argument executes", valid, {
      success: true,
      data: tree,
    });

    // Both negatives violate only the referenced `Recursive<"A/B">` definition,
    // so LangChain can reject them only by resolving the encoded reference.
    for (const [label, input] of [
      ["referenced numeric property", { value: "A/B", count: "42" }],
      ["referenced literal property", { value: "wrong", count: 0 }],
    ] as const) {
      try {
        await tool.invoke({ input: { ...input, children: [] } });
        throw new Error(`Expected ${label} to be rejected.`);
      } catch (error) {
        TestValidator.predicate(
          `LangChain resolves the encoded reference to reject a ${label}`,
          () =>
            error instanceof ToolInputParsingException &&
            error.message.includes("did not match expected schema"),
        );
      }
    }
  };

type Recursive<T extends string> = {
  value: T;
  count: number;
  children: Recursive<T>[];
};

class PointerService {
  public echo(props: { input: Recursive<"A/B"> }): Recursive<"A/B"> {
    return props.input;
  }
}
