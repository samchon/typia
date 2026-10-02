// separate-statement default export of a from/new class (no Default modifier on
// the class declaration itself)
/**
 * Separate-statement default fixture for static-factory value imports.
 *
 * @evidence contracts/testing.md#behavioral-verification Defines the actual Stamp identity/from implementation; the composite checks its reconstructed instance and value7.
 * @evidence contracts/testing.md#independent-expectations Literal seed7 and independently imported default Stamp define identity/content expectations.
 * @evidence contracts/testing.md#distinguishing-cases Default export is a separate statement rather than an inline modifier; private construction selects from.
 * @evidence contracts/testing.md#execution-ownership classify_extra_calls imports Stamp only as a type; the extra cross-module composite owns actual native reconstruction and assertions.
 */
class Stamp {
  value!: number;
  private constructor(value: number) {
    this.value = value;
  }
  /**
   * @evidence contracts/testing.md#behavioral-verification Allocates a Stamp prototype and copies seed value; both are observed after native reconstruction.
   * @evidence contracts/testing.md#independent-expectations The literal7 seed member is copied directly without taking expected content from the native result.
   * @evidence contracts/testing.md#distinguishing-cases A separate-default static factory must resolve the exported runtime identity despite the class having no inline default modifier.
   * @evidence contracts/testing.md#execution-ownership Called by native makeStamp and judged by the extra cross-module composite; it is not independently registered.
   */
  static from(seed: { value: number }): Stamp {
    const s = Object.create(Stamp.prototype) as Stamp;
    (s as { value: number }).value = seed.value;
    return s;
  }
}
export default Stamp;
