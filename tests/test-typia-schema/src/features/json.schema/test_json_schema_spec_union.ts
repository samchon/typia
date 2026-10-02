import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies the cat/dog union keeps exact discriminator mappings, reference
 * alternatives and cat component shape.
 *
 * Native discriminator analysis must connect emitted mappings with actual
 * component identity.
 *
 * 1. Invoke the schema producer on the type declarations in this file.
 * 2. Assert both union targets and the complete cat shape remain;
 *    oneof_declaration_syntax owns no-common-tag/nonobject negative twins.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that the cat/dog union keeps exact discriminator mappings, reference alternatives and cat component shape.
 * @evidence contracts/testing.md#independent-expectations Authored type tags and source interface members determine the fixed mapping/refs/cat object; expected values are not read from output.
 * @evidence contracts/testing.md#distinguishing-cases Both union targets and the complete cat shape remain; oneof_declaration_syntax owns no-common-tag/nonobject negative twins.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_spec_union through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native discriminator analysis must connect emitted mappings with actual component identity. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Both union targets and the complete cat shape remain; oneof_declaration_syntax owns no-common-tag/nonobject negative twins. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
 */
export const test_json_schema_spec_union = (): void => {
  interface ICat {
    type: "cat";
    name: string;
    meow: boolean;
  }
  interface IDog {
    type: "dog";
    name: string;
    bark: boolean;
  }
  type IAnimal = ICat | IDog;

  const unit = typia.json.schema<IAnimal>();
  const schema = clean(unit.schema) as OpenApi.IJsonSchema.IOneOf;
  TestEquality.equals("union discriminator", schema.discriminator, {
    propertyName: "type",
    mapping: {
      cat: "#/components/schemas/ICat",
      dog: "#/components/schemas/IDog",
    },
  });
  TestEquality.equals("union refs", schema.oneOf, [
    {
      $ref: "#/components/schemas/ICat",
    },
    {
      $ref: "#/components/schemas/IDog",
    },
  ]);
  TestEquality.equals("cat component", clean(unit.components.schemas?.ICat), {
    type: "object",
    properties: {
      meow: {
        type: "boolean",
      },
      name: {
        type: "string",
      },
      type: {
        const: "cat",
      },
    },
    required: ["type", "name", "meow"],
    additionalProperties: false,
  });
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
