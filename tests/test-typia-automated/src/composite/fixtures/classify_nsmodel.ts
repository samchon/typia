/**
 * Cross-module namespace fixture for qualified constructor value references.
 *
 * @evidence contracts/testing.md#behavioral-verification Supplies Point/Model runtime identities and methods checked by the extra cross-module composite after native reconstruction.
 * @evidence contracts/testing.md#independent-expectations Authored class methods, literal seeds and the consumer's separate namespace import define expectations.
 * @evidence contracts/testing.md#distinguishing-cases Namespace-qualified static construction and instance field copying contrast with adjacent separate-default bindings.
 * @evidence contracts/testing.md#execution-ownership classify_extra_calls imports NS only as a type; test_native_plain_classify_cross_module_extra owns callback execution and assertions.
 */
export namespace NS {
  /**
   * @evidence contracts/testing.md#behavioral-verification Defines a private-constructor Point reconstructed through its static factory; the composite checks instanceof and sum3.
   * @evidence contracts/testing.md#independent-expectations The seed x1/y2 and authored addition define sum3 independently of native output.
   * @evidence contracts/testing.md#distinguishing-cases Qualified NS.Point.from requires both namespace value-import synthesis and static-factory routing.
   * @evidence contracts/testing.md#execution-ownership The actual makePoint callback constructs this fixture; the discovered extra cross-module composite owns verdicts.
   */
  export class Point {
    private constructor(
      public readonly x: number,
      public readonly y: number,
    ) {}
    /**
     * @evidence contracts/testing.md#behavioral-verification Constructs Point using both seed coordinates; identity and sum are observed after the native callback.
     * @evidence contracts/testing.md#independent-expectations Authored constructor coordinate assignments define the expected x1/y2 sum3.
     * @evidence contracts/testing.md#distinguishing-cases Private constructor leaves this qualified static entry as the reconstruction strategy rather than direct new or field copying.
     * @evidence contracts/testing.md#execution-ownership Invoked by the actual transformed makePoint producer and judged by the extra cross-module composite.
     */
    static from(seed: { x: number; y: number }): NS.Point {
      return new NS.Point(seed.x, seed.y);
    }
    /**
     * @evidence contracts/testing.md#behavioral-verification Exposes the reconstructed Point prototype and both coordinate values through addition.
     * @evidence contracts/testing.md#independent-expectations Seed1+2 yields literal3 without reading another native operation.
     * @evidence contracts/testing.md#distinguishing-cases A plain seed lacks this method; incorrect prototype or coordinate transfer changes the observation.
     * @evidence contracts/testing.md#execution-ownership Called by the extra cross-module composite after makePoint; no standalone verdict is produced here.
     */
    sum(): number {
      return this.x + this.y;
    }
  }
  /**
   * @evidence contracts/testing.md#behavioral-verification Defines the namespace-qualified field-copy prototype; the composite checks instanceof and greet m4.
   * @evidence contracts/testing.md#independent-expectations Independently imported NS.Model identity and authored seed id4/string method define expectations.
   * @evidence contracts/testing.md#distinguishing-cases Instance form requires qualified prototype access, contrasting with Point's static construction.
   * @evidence contracts/testing.md#execution-ownership makeModel is transformed in classify_extra_calls; the extra cross-module composite owns its assertions.
   */
  export class Model {
    id!: number;
    /**
     * @evidence contracts/testing.md#behavioral-verification Exposes copied id and namespace Model prototype through a checked greeting.
     * @evidence contracts/testing.md#independent-expectations Authored m prefix and seed4 yield literal m4 independently of native output.
     * @evidence contracts/testing.md#distinguishing-cases A plain seed or wrong namespace constructor cannot satisfy both method and instanceof observations.
     * @evidence contracts/testing.md#execution-ownership Called only by the extra cross-module composite after its native makeModel callback; this fixture supplies no test verdict.
     */
    greet(): string {
      return "m" + this.id;
    }
  }
}
