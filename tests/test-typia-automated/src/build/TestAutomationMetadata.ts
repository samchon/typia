import { Spoiler } from "@typia/template";
import typia from "typia";

/**
 * Couples a discovered fixture name with generation, invalid mutations and
 * declared operation capabilities. Missing flags use each controller's default;
 * they do not imply that a fixture is appropriate for every public operation.
 *
 * @evidence contracts/common.md#principled-implementation T connects generate's valid value and SPOILERS' in-place invalid mutations; optional capability flags describe fixture eligibility without parsing TypeScript source. RANDOM may disable generation or supply generator overrides, unlike the ordinary boolean capabilities.
 * @evidence contracts/common.md#clear-and-simple-design One metadata object carries a discovered name, fixture callbacks and operation-specific switches. The controller consumes these switches, while assertions derive their expectations from the callbacks rather than this type.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts This interface does not embed expected native results or implement selection itself. Capability declarations remain authored fixture policy; their presence alone is not proof of complete operation coverage.
 * @evidence contracts/common.md#meaningful-documentation The introduction identifies the valid/invalid fixture roles and missing-flag semantics; members describe each capability's effect on enrollment rather than promising behavior from a boolean.
 */
export interface TestAutomationMetadata<T> {
  /** Structure export name discovered from its source filename. */
  name: string;
  /**
   * Creates a valid value for each independent scenario.
   *
   * @evidence contracts/common.md#principled-implementation The optional callback returns T so each enrolled helper can obtain an authored valid value; its absence means the declaration contributes no runnable structure.
   * @evidence contracts/common.md#clear-and-simple-design One callback leaves fixture construction with its owner and avoids embedding generator logic in the controller's metadata.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts This signature supplies inputs, not expected native output or a validation verdict; callers must still execute their actual assertions.
   * @evidence contracts/common.md#meaningful-documentation Native prose identifies valid-value and scenario ownership; the enclosing metadata comment explains optional fixture capabilities.
   */
  generate?(): T;
  /** Mutates a generated value and returns authored invalid diagnostic paths. */
  SPOILERS?: Spoiler<T>[];
  /** False excludes native surplus-member and pruning scenarios. */
  ADDABLE?: boolean;
  /** False excludes Protocol Buffer encoding and decoding. */
  BINARABLE?: boolean;
  /** True admits FormData decoding. */
  FORMDATA?: boolean;
  /** True admits query-string decoding. */
  QUERY?: boolean;
  /** True admits header decoding. */
  HEADERS?: boolean;
  /** False excludes operations requiring the Resolved projection. */
  RESOLVABLE?: boolean;
  /** False excludes JSON-compatible operations. */
  JSONABLE?: boolean;
  /** False excludes operations requiring the Primitive projection. */
  PRIMITIVE?: boolean;
  /** False excludes random generation; an object supplies random overrides. */
  RANDOM?: false | typia.IRandomGenerator;
  /** Marks recursive structure metadata without changing controller eligibility. */
  RECURSIVE?: true;
}
