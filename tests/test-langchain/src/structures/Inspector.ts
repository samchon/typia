/**
 * Deferred inspection service.
 *
 * Holds expensive state behind a closure so tool conversion can be checked
 * without building that state.
 *
 * @evidence contracts/testing.md#behavioral-verification The lazy_execute consumer asserts construction/conversion leave its counter zero and first SDK invoke builds once and returns depth=42.
 * @evidence contracts/testing.md#independent-expectations The consumer's authored closure counter and expected answer provide an oracle independent of generated controller metadata.
 * @evidence contracts/testing.md#distinguishing-cases Constructor stores a supplied closure or wraps a supplied value; lazy_execute exercises the deferred closure path, not concurrent or repeated invocation.
 * @evidence contracts/testing.md#execution-ownership This fixture class is constructed by the native integration case; DynamicExecutor registers the consumer rather than the fixture.
 */
export class Inspector {
  private readonly state: () => Inspector.IState;

  public constructor(source: Inspector.IState | (() => Inspector.IState)) {
    this.state = typeof source === "function" ? source : () => source;
  }

  /**
   * Inspect the deferred state.
   *
   * @param props Query to run against the state
   *
   * @returns The matching answer
   *
   * @evidence contracts/testing.md#behavioral-verification lazy_execute invokes inspect with query depth through the public SDK, asserts one closure read and answer depth=42.
   * @evidence contracts/testing.md#independent-expectations Literal query/value interpolation and a separately maintained closure counter establish its expected result and effect.
   * @evidence contracts/testing.md#distinguishing-cases Conversion must not read state, whereas first invocation must; repeated and concurrent invocation are not claimed by this case.
   * @evidence contracts/testing.md#execution-ownership This fixture method is reached through the native-produced controller and SDK tool in the lazy_execute integration entry.
   */
  public inspect(props: Inspector.IProps): Inspector.IResult {
    return { answer: `${props.query}=${this.state().value}` };
  }
}
export namespace Inspector {
  /**
   * State read by the deferred inspection closure.
   *
   * @evidence contracts/testing.md#behavioral-verification lazy_execute supplies value 42 from a counted closure and verifies its use in the returned answer.
   * @evidence contracts/testing.md#independent-expectations The authored value and query define depth=42 independently of the native producer.
   * @evidence contracts/testing.md#distinguishing-cases The type represents the one fixture state value; the consumer distinguishes conversion from execution without claiming a numeric boundary matrix.
   * @evidence contracts/testing.md#execution-ownership This fixture state type is owned by Inspector and the lazy_execute integration entry, not a standalone case.
   */
  export interface IState {
    value: number;
  }
  /**
   * Query supplied to the reflected inspect method.
   *
   * @evidence contracts/testing.md#behavioral-verification lazy_execute invokes the SDK tool with query depth and compares its answer to depth=42.
   * @evidence contracts/testing.md#independent-expectations The authored required string query and literal input determine the expected prefix independently of reflection.
   * @evidence contracts/testing.md#distinguishing-cases This fixture supports the lazy lifecycle scenario; malformed query validation is outside that scenario.
   * @evidence contracts/testing.md#execution-ownership The native integration consumer reflects this argument type and owns its runtime assertions.
   */
  export interface IProps {
    /** Question to answer from the state */
    query: string;
  }
  /**
   * Text produced from the query and deferred state.
   *
   * @evidence contracts/testing.md#behavioral-verification lazy_execute compares the SDK success envelope with the literal answer depth=42.
   * @evidence contracts/testing.md#independent-expectations String interpolation of the authored query and value supplies the expectation independently of emitted output metadata.
   * @evidence contracts/testing.md#distinguishing-cases This result distinguishes correct dispatch from absent or altered answer data; output failure variants are owned by separate output tests.
   * @evidence contracts/testing.md#execution-ownership This fixture return type is reflected by the native integration consumer; it is not an executable test entry.
   */
  export interface IResult {
    /** Answer text */
    answer: string;
  }
}
