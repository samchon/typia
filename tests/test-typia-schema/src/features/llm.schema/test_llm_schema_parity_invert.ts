import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaCollection, ILlmSchema, OpenApi } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

export const test_llm_schema_parity_invert = (): void => {
  interface ICat {
    type: "cat";
    name: string & tags.MinLength<1>;
    meow: boolean;
  }
  interface IDog {
    type: "dog";
    name: string & tags.MinLength<1>;
    bark: boolean;
  }
  type IAnimal = ICat | IDog | null;

  const collection: IJsonSchemaCollection = typia.json.schemas<[IAnimal]>();
  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<IAnimal>($defs);
  const components: OpenApi.IComponents = {};
  const inverted = LlmSchemaConverter.invert({
    components,
    schema,
    $defs,
  });

  TestValidator.equals(
    "inverted schema",
    clean(inverted),
    clean(collection.schemas[0]),
  );
  TestValidator.equals(
    "inverted components",
    stripXDiscriminator(components),
    clean(collection.components),
  );
  TestValidator.equals(
    "x-discriminator preserved",
    clean(
      (
        components.schemas?.IAnimal as
          | (OpenApi.IJsonSchema.IOneOf & {
              "x-discriminator"?: unknown;
            })
          | undefined
      )?.["x-discriminator"],
    ),
    {
      propertyName: "type",
      mapping: {
        cat: "#/$defs/ICat",
        dog: "#/$defs/IDog",
      },
    },
  );

  const strict = typia.llm.schema<
    string &
      tags.Format<"uuid"> &
      tags.MinLength<36> &
      tags.MaxLength<36> &
      tags.Pattern<"^[0-9a-f-]+$">,
    { strict: true }
  >({});
  const strictInverted = LlmSchemaConverter.invert({
    components: {},
    schema: strict,
    $defs: {},
  }) as OpenApi.IJsonSchema.IString;
  TestValidator.equals(
    "strict description inversion constraints",
    clean({
      type: strictInverted.type,
      format: strictInverted.format,
      minLength: strictInverted.minLength,
      maxLength: strictInverted.maxLength,
      pattern: strictInverted.pattern,
    }),
    clean({
      type: "string",
      format: "uuid",
      minLength: 36,
      maxLength: 36,
      pattern: "^[0-9a-f-]+$",
    } satisfies typeof strictTargetSchema),
  );
  TestValidator.equals(
    "strict descriptor tags consumed",
    strictInverted.description,
    undefined,
  );
};

declare const strictTargetSchema: {
  type: "string";
  format: "uuid";
  minLength: 36;
  maxLength: 36;
  pattern: "^[0-9a-f-]+$";
};

const stripXDiscriminator = <T>(value: T): T => {
  const cloned: T = clean(value);
  const visit = (input: unknown): void => {
    if (Array.isArray(input)) input.forEach(visit);
    else if (input !== null && typeof input === "object") {
      delete (input as Record<string, unknown>)["x-discriminator"];
      Object.values(input).forEach(visit);
    }
  };
  visit(cloned);
  return cloned;
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
