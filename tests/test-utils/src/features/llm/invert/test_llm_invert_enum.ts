import { ILlmSchema } from "@typia/interface";
import typia from "typia";

import { _test_llm_invert } from "../../../internal/_test_llm_invert";

/**
 * Verifies literal LLM schemas invert to the OpenAPI constants typia emits.
 *
 * The LLM format spells a literal union as a typed `enum`, while the emended
 * OpenAPI format spells each member as a `const`. This case once compared the
 * inversion with the LLM schema itself and skipped every key but `description`,
 * so it asserted nothing (#2401).
 *
 * 1. Write a boolean, a numeric, and a string literal union as LLM schemas.
 * 2. Invert each and compare it with `typia.json.schema` of the same type.
 *
 * @evidence contracts/testing.md#behavioral-verification Boolean, numeric and string literal unions are inverted from natively generated LLM schemas and compared with typia.json.schema of the same type through the shared helper.
 * @evidence contracts/testing.md#independent-expectations typia.json.schema is an independent producer of the emended OpenAPI schema for the same TypeScript type, so the expectation is not the inverter's own input.
 * @evidence contracts/testing.md#distinguishing-cases Three literal families are separate comparisons; mixed unions are covered by the oneOf case.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. both schemas come from the native transform; the helper normalizes references and union order in process.
 * @evidence contracts/e2e.md#necessary-boundary Native LLM enum and JSON literal-union schemas feed the inversion oracle for one declaration, pinning enum-to-const interoperability. Shared native metadata can yield matching producer defects.
 * @evidence contracts/e2e.md#shared-execution This case shares the test-utils integration project and native-plugin artifact lifecycle with the other src/features exports. Its runtime rows reuse emitted schemas/callbacks in this invocation instead of starting a compiler host per input; it performs no independent installation or host launch.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its schema/definition objects and payloads; document callers parse fresh text before conversion. Compiler-artifact reuse cannot supply a prior runtime verdict. This case opens no persistent service/process handle; fixture-reader unit temporary files are owned and released by that separate unit.
 * @evidence contracts/e2e.md#preserved-coverage The previous inputs, producer calls and behavioral assertions remain in this exported DynamicExecutor case; portable rows described above have not yet been transferred to unit coverage. Producer parity and structural acceptance retain their stated oracle limits rather than certifying semantic correctness.
 */
export const test_llm_invert_enum = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  _test_llm_invert(
    "false",
    typia.llm.schema<false>($defs),
    $defs,
    typia.json.schema<false>(),
  );
  _test_llm_invert(
    "1 | 2 | 3",
    typia.llm.schema<1 | 2 | 3>($defs),
    $defs,
    typia.json.schema<1 | 2 | 3>(),
  );
  _test_llm_invert(
    `"a" | "b" | "c"`,
    typia.llm.schema<"a" | "b" | "c">($defs),
    $defs,
    typia.json.schema<"a" | "b" | "c">(),
  );
};
