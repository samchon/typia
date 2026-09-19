import { ILlmSchema } from "@typia/interface";
import typia, { tags } from "typia";

import { _test_llm_invert } from "../../../internal/_test_llm_invert";

/**
 * Verifies nullable LLM schemas invert to the OpenAPI unions typia emits.
 *
 * The LLM format spells a nullable type as an `anyOf` with a `null` member and
 * the emended OpenAPI format as a `oneOf`. This case once compared the
 * inversion with the LLM schema itself, skipped every key but `description`,
 * and passed empty `$defs` beside a schema written into other ones, so each
 * constrained member inverted to `{ oneOf: [] }` unnoticed (#2401).
 *
 * 1. Write nullable boolean, constrained number, string, and array types, and a
 *    nullable object, as LLM schemas.
 * 2. Invert each and compare it, constraints included, with `typia.json.schema` of
 *    the same type.
 */
export const test_llm_invert_nullable = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  _test_llm_invert(
    "boolean | null",
    typia.llm.schema<boolean | null>($defs),
    $defs,
    typia.json.schema<boolean | null>(),
  );
  _test_llm_invert(
    "number | null",
    typia.llm.schema<INumber>($defs),
    $defs,
    typia.json.schema<INumber>(),
  );
  _test_llm_invert(
    "string | null",
    typia.llm.schema<IString>($defs),
    $defs,
    typia.json.schema<IString>(),
  );
  _test_llm_invert(
    "array | null",
    typia.llm.schema<IArray>($defs),
    $defs,
    typia.json.schema<IArray>(),
  );
  _test_llm_invert(
    "object | null",
    typia.llm.schema<IMember | null>($defs),
    $defs,
    typia.json.schema<IMember | null>(),
  );
};

type INumber =
  | (number & tags.ExclusiveMinimum<0> & tags.Maximum<100> & tags.MultipleOf<5>)
  | null;
type IString =
  | (string &
      tags.Format<"uri"> &
      tags.ContentMediaType<"image/png"> &
      tags.MinLength<5>)
  | null;
type IArray = (Array<number> & tags.MinItems<1> & tags.MaxItems<10>) | null;
interface IMember {
  /** Primary Key. */
  id: string & tags.Format<"uuid">;

  /** Email Address. */
  email: string & tags.Format<"email">;
  name: string;
  age: null | (number & tags.Minimum<0> & tags.Maximum<100>);
  hobbies: Array<{
    title: string;
    description: string;
  }>;
}
