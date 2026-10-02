import {
  DynamicStructuredTool,
  ToolInputParsingException,
} from "@langchain/core/tools";
import { Validator, toJsonSchema } from "@langchain/core/utils/json_schema";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import { TestEquality } from "@typia/template/equality";
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
 *    confirm it accepts a conforming value and rejects violations of the
 *    referenced definition alone.
 * 3. Execute a valid recursive value through the real LangChain tool.
 * 4. Reject both a referenced numeric and a referenced literal violation, each
 *    with typia's feedback naming the path under the reference.
 *
 * @evidence contracts/testing.md#behavioral-verification Reflected RecursiveA~1B metadata survives the SDK schema converter; its Validator accepts a conforming recursive tree and rejects wrong literal/count, while invoke reports both authored failure paths.
 * @evidence contracts/testing.md#independent-expectations RFC 6901 slash escaping, authored recursive literal/number constraints, tree data and negative mutations establish expectations independently of emitted references.
 * @evidence contracts/testing.md#distinguishing-cases Model-facing SDK validation and actual invoke cover valid trees plus literal and numeric one-axis negatives; numeric-string coercion is avoided in these negatives.
 * @evidence contracts/testing.md#execution-ownership test-langchain test:integration discovers test_langchain_json_pointer_reference_arguments through DynamicExecutor after native rewriting of its typia call sites. No live model endpoint is used.
 * @evidence contracts/e2e.md#necessary-boundary Reflected RecursiveA~1B metadata survives the SDK schema converter; its Validator accepts a conforming recursive tree and rejects wrong literal/count, while invoke reports both authored failure paths. The native-produced controller is registered as an actual DynamicStructuredTool and its public SDK surface is exercised; authored metadata alone cannot establish producer-to-SDK assembly.
 * @evidence contracts/e2e.md#shared-execution All native calls share one suite project, installed content-keyed plugin artifact and runtime process. Tool conversions and scenario inputs need no separate compiler, installation or model host; strict/ordinary options, where present, are emitted in that same project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its controller/tool or structured-output object and authored input. No endpoint connection, transport, timer or native process is acquired by the case. Local state and returned promises live through the awaited scenario; the suite/compiler own native artifact lifecycle.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Model-facing SDK validation and actual invoke cover valid trees plus literal and numeric one-axis negatives; numeric-string coercion is avoided in these negatives. Portable authored-OpenAPI HTTP tool cases retain their original names and assertions in the plugin-free test:unit population.
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
        }).valid === false &&
        validator.validate({
          input: { value: "A/B", count: "not a number", children: [] },
        }).valid === false,
    );

    const valid = await tool.invoke({ input: tree });
    TestEquality.equals("valid referenced argument executes", valid, {
      success: true,
      data: tree,
    });

    // Each negative violates only the referenced `Recursive<"A/B">` definition
    // and survives coercion — `"42"` would not, since typia coerces it to `42`
    // and accepts the call — so typia can reject them only by resolving the
    // encoded reference.
    for (const [label, input, path] of [
      [
        "referenced numeric property",
        { value: "A/B", count: "not a number" },
        "$input.input.count",
      ],
      [
        "referenced literal property",
        { value: "wrong", count: 0 },
        "$input.input.value",
      ],
    ] as const) {
      const error: unknown = await tool
        .invoke({ input: { ...input, children: [] } })
        .then(() => undefined)
        .catch((exp: unknown) => exp);
      TestValidator.predicate(
        `typia resolves the encoded reference to reject a ${label}`,
        () =>
          error instanceof ToolInputParsingException &&
          error.message.includes('Type errors in "echo" arguments:') &&
          error.message.includes(`"path":"${path}"`),
      );
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
