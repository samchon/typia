import {
  DynamicStructuredTool,
  ToolInputParsingException,
} from "@langchain/core/tools";
import { Validator, toJsonSchema } from "@langchain/core/utils/json_schema";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import typia from "typia";

/**
 * Verifies a generated canonical local reference resolves for model and tool.
 *
 * A definition key containing `/` has to reach the model as the JSON Pointer
 * escape `#/$defs/RecursiveA~1B`, and both readers of that reference must
 * resolve it: the JSON Schema the model is shown, and the validator the tool
 * runs. `@cfworker/json-schema` — which LangChain re-exports, and which never
 * sees typia's own inversion — is the independent oracle for the first, since a
 * fail-open reference would admit every negative instead of resolving the
 * escaped key. Typia's validator is the authority for the second.
 *
 * 1. Advertise a recursive argument whose generated definition key contains `/`.
 * 2. Resolve the advertised schema with an independent JSON Schema validator and
 *    confirm it accepts a conforming value and rejects a violation of the
 *    referenced definition alone.
 * 3. Execute a valid recursive value through the real LangChain tool.
 * 4. Reject a value violating only the referenced schema, with typia's feedback.
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

    // The model-facing schema must resolve the escaped key on its own terms.
    const validator: Validator = new Validator(
      toJsonSchema(tool.schema) as object,
    );
    TestValidator.predicate(
      "the advertised schema accepts a conforming referenced value",
      () => validator.validate({ input: tree }).valid,
    );
    TestValidator.predicate(
      "the advertised schema resolves the encoded reference to reject a violation",
      () =>
        validator.validate({
          input: { value: "wrong", count: 0, children: [] },
        }).valid === false,
    );

    const valid = await tool.invoke({ input: tree });
    TestValidator.equals("valid referenced argument executes", valid, {
      success: true,
      data: tree,
    });

    // Violates only the referenced `Recursive<"A/B">` definition, and survives
    // coercion, so typia can reject it only by resolving the encoded reference.
    const error: unknown = await tool
      .invoke({ input: { value: "wrong", count: 0, children: [] } })
      .then(() => undefined)
      .catch((exp: unknown) => exp);
    TestValidator.predicate(
      "typia resolves the encoded reference to reject a referenced literal",
      () =>
        error instanceof ToolInputParsingException &&
        error.message.includes('Type errors in "echo" arguments:') &&
        error.message.includes('"path":"$input.input.value"'),
    );
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
