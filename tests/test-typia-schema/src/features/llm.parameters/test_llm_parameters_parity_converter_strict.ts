import { IJsonSchemaCollection, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies llm parameters parity converter strict against the native
 * typia.json.schemas, typia.llm.parameters output.
 *
 * The case builds its input in this file and asserts strict parameters.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schemas, typia.llm.parameters is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (strict parameters).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (strict parameters) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_parameters_parity_converter_strict is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_parameters_parity_converter_strict = (): void => {
  interface IStrictChild {
    code: string & tags.MinLength<2>;
    score: number & tags.Minimum<0> & tags.Maximum<100>;
  }
  interface IStrictParams {
    child: IStrictChild;
    labels: (string & tags.Pattern<"^[a-z]+$">)[] & tags.MinItems<1>;
    mode: "alpha" | "beta";
  }

  const collection: IJsonSchemaCollection =
    typia.json.schemas<[IStrictParams]>();
  const converted = LlmSchemaConverter.parameters({
    config: { strict: true },
    components: collection.components as OpenApi.IComponents,
    schema: collection.schemas[0] as
      | OpenApi.IJsonSchema.IObject
      | OpenApi.IJsonSchema.IReference,
  });
  if (converted.success === false)
    throw new Error(JSON.stringify(converted.error, null, 2));

  const actual = typia.llm.parameters<IStrictParams, { strict: true }>();

  TestEquality.equals(
    "strict parameters",
    clean(actual),
    clean(converted.value),
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
