import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies llm schema spec string against the native typia.llm.schema output.
 *
 * The case builds its input in this file and asserts string, format, pattern,
 * length, content media type, default.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.schema is evaluated by the native host on the types declared in this case and the result is checked by 7 assertions (string; format; pattern; length; content media type; default).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (string; format; pattern; length; content media type; default) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_schema_spec_string is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_schema_spec_string = (): void => {
  TestEquality.equals("string", clean(typia.llm.schema<string>({})), {
    type: "string",
  });
  TestEquality.equals(
    "format",
    clean(typia.llm.schema<string & tags.Format<"email">>({})),
    {
      type: "string",
      format: "email",
    },
  );
  TestEquality.equals(
    "pattern",
    clean(typia.llm.schema<string & tags.Pattern<"^[a-z]+$">>({})),
    {
      type: "string",
      pattern: "^[a-z]+$",
    },
  );
  TestEquality.equals(
    "length",
    clean(typia.llm.schema<string & tags.MinLength<2> & tags.MaxLength<8>>({})),
    {
      type: "string",
      minLength: 2,
      maxLength: 8,
    },
  );
  TestEquality.equals(
    "content media type",
    clean(typia.llm.schema<string & tags.ContentMediaType<"image/png">>({})),
    {
      type: "string",
      contentMediaType: "image/png",
    },
  );
  TestEquality.equals(
    "default",
    clean(typia.llm.schema<string & tags.Default<"guest">>({})),
    {
      type: "string",
      default: "guest",
    },
  );
  TestEquality.equals(
    "string literal union",
    enumSchema(typia.llm.schema<"alpha" | "beta" | "gamma">({})),
    {
      type: "string",
      enum: ["alpha", "beta", "gamma"],
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));

const enumSchema = (
  schema: ILlmSchema,
): { type: string | undefined; enum: unknown[] } => ({
  type: (schema as { type?: string }).type,
  enum: [...((schema as { enum?: unknown[] }).enum ?? [])].sort(),
});
