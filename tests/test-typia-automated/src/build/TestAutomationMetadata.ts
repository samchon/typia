import { Spoiler } from "@typia/template";
import typia from "typia";

/**
 * Couples a discovered fixture name with generation, invalid mutations and
 * declared operation capabilities. Missing flags use each controller's default;
 * they do not imply that a fixture is appropriate for every public operation.
 *
 * @evidence contracts/testing.md#behavioral-verification This type couples the authored fixture generator and invalid mutations to the controller's discovered name and eligibility flags; it performs no assertion. Runtime helpers own clean/spoiled verdicts and direct_factory_matrix owns generation enrollment checks.
 * @evidence contracts/testing.md#independent-expectations generate and SPOILERS originate in the fixture owner, not product output. Optional capability flags describe supported inputs; their presence alone establishes neither fixture validity nor an independent random-generator oracle.
 * @evidence contracts/testing.md#distinguishing-cases Optional generate means non-runnable metadata; positive transport flags admit their families while false compatibility flags exclude them. RANDOM distinguishes disabled generation from customization and RECURSIVE does not itself alter eligibility.
 * @evidence contracts/testing.md#execution-ownership loadMetadata constructs this representation from template exports, generateFeatureSet consumes its flags, and the named generated case hands the same fixture to its helper. No type-level or runtime case is independently registered by the interface.
 */
export interface TestAutomationMetadata<T> {
  /** Structure export name discovered from its source filename. */
  name: string;
  /**
   * Creates a valid value for each independent scenario.
   *
   * @evidence contracts/testing.md#behavioral-verification This optional fixture signature supplies input to operation helpers; it runs no assertion. Helpers request a fresh value for clean and spoiled scenarios before executing the actual callback.
   * @evidence contracts/testing.md#independent-expectations Each fixture owner authors this generator beside its TypeScript declaration; its output is independent of the callback under test. The signature alone does not prove generator validity or absence of shared fixture state.
   * @evidence contracts/testing.md#distinguishing-cases Undefined generate excludes a metadata entry from runnable families; a present callback provides T. Capability flags still control which operation families may consume it.
   * @evidence contracts/testing.md#execution-ownership loadMetadata copies the fixture's generator, the controller checks presence, and each generated helper invocation calls the original fixture callback. The signature declares no additional independently registered case.
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
