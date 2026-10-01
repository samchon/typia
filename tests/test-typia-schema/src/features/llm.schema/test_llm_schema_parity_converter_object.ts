import { IJsonSchemaCollection, ILlmSchema, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies llm schema parity converter object against the native
 * typia.json.schemas, typia.llm.schema output.
 *
 * The case builds its input in this file and asserts schema, $defs.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schemas, typia.llm.schema is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (schema; $defs).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (schema; $defs) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_schema_parity_converter_object is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_schema_parity_converter_object = (): void => {
  interface ILeaf {
    code: string & tags.Pattern<"^[A-Z]{2}$">;
    amount?: number & tags.Minimum<0>;
  }
  interface IMatrix {
    id: string & tags.Format<"uuid">;
    title: string & tags.MinLength<2> & tags.MaxLength<32>;
    flag: true;
    mode: "create" | "update" | "delete";
    level: 1 | 2 | 3;
    nullable: string | null;
    leaf: ILeaf;
    leaves: ILeaf[] & tags.MinItems<1> & tags.MaxItems<5> & tags.UniqueItems;
    dictionary: Record<string, number & tags.Minimum<0>>;
  }

  const collection: IJsonSchemaCollection = typia.json.schemas<[IMatrix]>();
  const expectedDefs: Record<string, ILlmSchema> = {};
  const converted = LlmSchemaConverter.schema({
    config: { strict: false },
    components: collection.components as OpenApi.IComponents,
    $defs: expectedDefs,
    schema: collection.schemas[0] as OpenApi.IJsonSchema,
  });
  if (converted.success === false)
    throw new Error(JSON.stringify(converted.error, null, 2));

  const actualDefs: Record<string, ILlmSchema> = {};
  const actual = typia.llm.schema<IMatrix>(actualDefs);

  TestEquality.equals("schema", clean(actual), clean(converted.value));
  TestEquality.equals("$defs", clean(actualDefs), clean(expectedDefs));
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
