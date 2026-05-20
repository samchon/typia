import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies that `typia.json.schema` emits a `oneOf` discriminated union with
 * correct component refs.
 *
 * Discriminated unions must produce a root `oneOf` schema with
 * `discriminator.propertyName` and per-variant `$ref` entries, while each
 * component schema is expanded in `components.schemas`. A regression could
 * silently merge variants or omit the `discriminator` mapping.
 *
 * 1. Declare `ICat` and `IDog` sharing a `type` literal discriminator and union
 *    them as `IAnimal`.
 * 2. Call `typia.json.schema<IAnimal>()` and assert the root is a `oneOf` schema.
 * 3. Assert `discriminator.mapping` and that `components.schemas.ICat` has the
 *    expected shape.
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
  const rawSchema = clean(unit.schema);
  TestValidator.predicate("root is oneOf", () =>
    OpenApiTypeChecker.isOneOf(rawSchema),
  );
  const schema = rawSchema as OpenApi.IJsonSchema.IOneOf;
  TestValidator.equals("union discriminator", schema.discriminator, {
    propertyName: "type",
    mapping: {
      cat: "#/components/schemas/ICat",
      dog: "#/components/schemas/IDog",
    },
  });
  TestValidator.equals(
    "union refs",
    sortOneOf(schema.oneOf),
    sortOneOf([
      { $ref: "#/components/schemas/ICat" },
      { $ref: "#/components/schemas/IDog" },
    ]),
  );
  TestValidator.equals("cat component", clean(unit.components.schemas?.ICat), {
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

const sortOneOf = (items: OpenApi.IJsonSchema[]): OpenApi.IJsonSchema[] =>
  [...items].sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
