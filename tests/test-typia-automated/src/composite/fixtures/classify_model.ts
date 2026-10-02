/**
 * Named cross-module field-copy fixture.
 *
 * @evidence contracts/testing.md#behavioral-verification Supplies id and the real Model prototype; the cross-module composite asserts instanceof and greet after the native callback reconstructs it.
 * @evidence contracts/testing.md#independent-expectations Its authored id/string method and separately imported constructor establish the composite's literal m3 expectation.
 * @evidence contracts/testing.md#distinguishing-cases Named instance-form field copying contrasts with Factory's static construction and Memo's default export.
 * @evidence contracts/testing.md#execution-ownership classify_cross_calls imports this type only; test_native_plain_classify_cross_module owns runtime assertions and registration.
 */
export class Model {
  id!: number;
  /**
   * @evidence contracts/testing.md#behavioral-verification Exposes the reconstructed prototype and id through a string result checked by the composite.
   * @evidence contracts/testing.md#independent-expectations The literal m prefix and seed id define the expected result without reading native output.
   * @evidence contracts/testing.md#distinguishing-cases A plain input object lacks this prototype method; the seed id3 must produce m3.
   * @evidence contracts/testing.md#execution-ownership Called by the cross-module composite after its actual native classifyModel callback; this method makes no test verdict itself.
   */
  greet(): string {
    return "m" + this.id;
  }
}

/**
 * Named cross-module static-factory fixture with a private constructor.
 *
 * @evidence contracts/testing.md#behavioral-verification Supplies the real Factory.from construction path; the composite asserts constructor identity and value7 after native reconstruction.
 * @evidence contracts/testing.md#independent-expectations Authored seed value and separately imported Factory constructor establish expected identity/content.
 * @evidence contracts/testing.md#distinguishing-cases Private construction selects the static from strategy, contrasting with neighboring instance-form field-copy fixtures.
 * @evidence contracts/testing.md#execution-ownership classify_cross_calls imports Factory only as a type and supplies its callback to the discovered cross-module composite.
 */
export class Factory {
  value!: number;
  private constructor(value: number) {
    this.value = value;
  }
  /**
   * @evidence contracts/testing.md#behavioral-verification Constructs a Factory-prototyped object and copies the supplied seed value; the composite checks both outcomes.
   * @evidence contracts/testing.md#independent-expectations The authored seed member is copied directly, independently of the native classify producer's output.
   * @evidence contracts/testing.md#distinguishing-cases This static factory bypasses the private constructor and must preserve value7 when referenced across the module boundary.
   * @evidence contracts/testing.md#execution-ownership Called by the actual transformed classifyFactory callback; test_native_plain_classify_cross_module owns its assertions.
   */
  static from(seed: { value: number }): Factory {
    const f = Object.create(Factory.prototype) as Factory;
    (f as { value: number }).value = seed.value;
    return f;
  }
}

/**
 * Inline default-export class fixture for native value-import synthesis.
 *
 * @evidence contracts/testing.md#behavioral-verification Supplies Memo's text and prototype; the composite checks reconstructed default constructor identity and show output.
 * @evidence contracts/testing.md#independent-expectations Separately imported Memo and literal hi establish expected identity and text.
 * @evidence contracts/testing.md#distinguishing-cases Inline default export contrasts with Model/Factory's named bindings and the separate-statement default fixtures.
 * @evidence contracts/testing.md#execution-ownership classify_cross_calls imports Memo only as a type; the cross-module composite owns native callback execution and assertions.
 */
export default class Memo {
  text!: string;
  /**
   * @evidence contracts/testing.md#behavioral-verification Returns reconstructed text through the actual Memo prototype method; the composite checks its result.
   * @evidence contracts/testing.md#independent-expectations Authored literal hi is the expected string, not another producer's output.
   * @evidence contracts/testing.md#distinguishing-cases Missing default-constructor binding or prototype reconstruction prevents this method/identity observation.
   * @evidence contracts/testing.md#execution-ownership Invoked after classifyMemo by the cross-module composite, with no standalone test registration.
   */
  show(): string {
    return this.text;
  }
}
