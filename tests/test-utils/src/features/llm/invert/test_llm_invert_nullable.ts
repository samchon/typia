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
 *
 * @evidence contracts/testing.md#behavioral-verification Nullable boolean, constrained number, string, array and object types are inverted from natively generated LLM schemas and compared, constraints included, with typia.json.schema.
 * @evidence contracts/testing.md#independent-expectations typia.json.schema produces the expected OneOf shape independently, and empty definitions would invert to an empty oneOf, which the comparison catches.
 * @evidence contracts/testing.md#distinguishing-cases Each nullable family is separate; non-nullable unions are in the oneOf case.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. both schemas come from the native transform; the helper compares in process.
 * @evidence contracts/e2e.md#necessary-boundary Native LLM nullable and JSON schemas feed the inversion oracle for one declaration, pinning nullable-union interoperability. Shared native metadata can yield matching producer defects.
 * @evidence contracts/e2e.md#shared-execution This case shares the test-utils integration project and native-plugin artifact lifecycle with the other src/features exports. Its runtime rows reuse emitted schemas/callbacks in this invocation instead of starting a compiler host per input; it performs no independent installation or host launch.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its schema/definition objects and payloads; document callers parse fresh text before conversion. Compiler-artifact reuse cannot supply a prior runtime verdict. This case opens no persistent service/process handle; fixture-reader unit temporary files are owned and released by that separate unit.
 * @evidence contracts/e2e.md#preserved-coverage The previous inputs, producer calls and behavioral assertions remain in this exported DynamicExecutor case; portable rows described above have not yet been transferred to unit coverage. Producer parity and structural acceptance retain their stated oracle limits rather than certifying semantic correctness.
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
