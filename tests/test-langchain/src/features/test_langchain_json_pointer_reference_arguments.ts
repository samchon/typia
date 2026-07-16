import {
  DynamicStructuredTool,
  ToolInputParsingException,
} from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import typia from "typia";

/**
 * Verifies LangChain consumes generated canonical local references.
 *
 * 1. Advertise a recursive argument whose generated definition key contains `/`.
 * 2. Invoke the real LangChain tool with a valid recursive value.
 * 3. Reject an invalid referenced literal through the adapter boundary.
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
      children: [{ value: "A/B", children: [] }],
    };
    const valid = await tool.invoke({ input: tree });
    TestValidator.equals("valid referenced argument executes", valid, {
      success: true,
      data: tree,
    });

    try {
      await tool.invoke({ input: { value: "wrong", children: [] } });
      throw new Error("Expected referenced argument validation to fail.");
    } catch (error) {
      TestValidator.predicate(
        "invalid referenced argument is rejected",
        () => error instanceof ToolInputParsingException,
      );
    }
  };

type Recursive<T extends string> = {
  value: T;
  children: Recursive<T>[];
};

class PointerService {
  public echo(props: { input: Recursive<"A/B"> }): Recursive<"A/B"> {
    return props.input;
  }
}
