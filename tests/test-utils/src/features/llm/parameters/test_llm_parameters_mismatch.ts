import {
  IJsonSchemaTransformError,
  ILlmSchema,
  IResult,
  OpenApi,
} from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { IJsonSchemaCollection } from "typia";

/**
 * Verifies broken references in native schemas are reported with every
 * accessor.
 *
 * A parameters conversion over a collection whose references were corrupted
 * must report all failing locations rather than stopping at the first.
 *
 * 1. Generate a schema collection natively and corrupt three references.
 * 2. Convert it with LlmSchemaConverter.parameters.
 * 3. Assert failure and the accessors of all three locations.
 *
 * @evidence contracts/testing.md#behavioral-verification LlmSchemaConverter.parameters runs on a natively generated collection with edited references and the success flag and reported accessors are asserted.
 * @evidence contracts/testing.md#independent-expectations The corrupted reference names are authored and the expected accessors follow the authored structure, not the converter.
 * @evidence contracts/testing.md#distinguishing-cases Root property, nested object and array item references are separate failure locations; a valid collection is the unit twin.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. the collection is produced by the native typia.json.schemas; the conversion runs in process.
 * @evidence contracts/e2e.md#necessary-boundary A native schema collection and native shape guards precede three deliberately corrupted references. parameters must report the authored root-property, nested-object and array-item accessors on actual emitted structure.
 * @evidence contracts/e2e.md#shared-execution This case shares the test-utils integration project and native-plugin artifact lifecycle with the other src/features exports. Its runtime rows reuse emitted schemas/callbacks in this invocation instead of starting a compiler host per input; it performs no independent installation or host launch.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its schema/definition objects and payloads; document callers parse fresh text before conversion. Compiler-artifact reuse cannot supply a prior runtime verdict. This case opens no persistent service/process handle; fixture-reader unit temporary files are owned and released by that separate unit.
 * @evidence contracts/e2e.md#preserved-coverage The previous inputs, producer calls and behavioral assertions remain in this exported DynamicExecutor case; portable rows described above have not yet been transferred to unit coverage. Producer parity and structural acceptance retain their stated oracle limits rather than certifying semantic correctness.
 */
export const test_llm_parameters_mismatch = (): void => {
  const collection: IJsonSchemaCollection = typia.json.schemas<
    [
      {
        first: IPoint;
        second: {
          input: ICircle;
        };
        third: Array<{
          nested: IRectangle;
        }>;
      },
    ]
  >();
  const p: any = (typia.assert<OpenApi.IJsonSchema.IObject>(
    collection.schemas[0],
  ).properties ?? {}) satisfies Record<string, OpenApi.IJsonSchema>;
  p.first.$ref = "#/components/schemas/IPoint1";
  p.second.properties.input.$ref = "#/components/schemas/ICircle1";
  p.third.items.properties.nested.$ref = "#/components/schemas/IRectangle1";

  const result: IResult<ILlmSchema.IParameters, IJsonSchemaTransformError> =
    LlmSchemaConverter.parameters({
      accessor: "$input",
      components: collection.components,
      schema: typia.assert<
        OpenApi.IJsonSchema.IReference | OpenApi.IJsonSchema.IObject
      >(collection.schemas[0]),
    });
  TestEquality.equals("success", result.success, false);
  TestEquality.equals(
    "errors",
    result.success ? [] : result.error.reasons.map((r) => r.accessor).sort(),
    [
      `$input.properties["first"]`,
      `$input.properties["second"].properties["input"]`,
      `$input.properties["third"].items.properties["nested"]`,
    ].sort(),
  );
};

interface IPoint {
  x: number;
  y: number;
}
interface ICircle {
  radius: number;
  center: IPoint;
}
interface IRectangle {
  p1: IPoint;
  p2: IPoint;
}
