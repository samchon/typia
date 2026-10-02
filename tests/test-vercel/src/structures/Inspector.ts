/**
 * Deferred inspection service.
 *
 * Holds expensive state behind a closure so tool conversion can be checked
 * without building that state.
 *
 * @evidence contracts/testing.md#behavioral-verification This fixture invokes its supplied state closure only during inspect; single_controller_lazy_execute checks zero builds during conversion, one build after execution and the full depth=42 result.
 * @evidence contracts/testing.md#independent-expectations The case's authored counter and value42 establish deferred-work expectations; query/value interpolation establishes the expected answer without reading adapter output.
 * @evidence contracts/testing.md#distinguishing-cases Constructor accepts a state value or closure; the actual regression supplies the closure to distinguish registration from first execution. It does not claim once-ever caching.
 * @evidence contracts/testing.md#execution-ownership The native-enabled single_controller_lazy_execute case creates and reflects Inspector. Its constructor, state closure and IState/IProps/IResult are fixture support, not independently registered cases.
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
   * @evidence contracts/testing.md#behavioral-verification This method invokes state and formats query=value; single_controller_lazy_execute asserts depth=42 and one state build after conversion caused zero builds.
   * @evidence contracts/testing.md#independent-expectations The owned counter and value42 plus query depth establish expected call timing and result text independently of the adapter.
   * @evidence contracts/testing.md#distinguishing-cases Registration and first invocation distinguish deferred work; the case does not claim state is cached across repeated method calls.
   * @evidence contracts/testing.md#execution-ownership The native-enabled lazy-execute integration case invokes this fixture through the public Vercel tool; inspect owns no assertions.
   */
  public inspect(props: Inspector.IProps): Inspector.IResult {
    return { answer: `${props.query}=${this.state().value}` };
  }
}
export namespace Inspector {
  /**
   * Value supplied by the deferred fixture source.
   *
   * @evidence contracts/testing.md#behavioral-verification This type describes the source's value; the lazy-execute case asserts its value42 appears in the complete answer wrapper.
   * @evidence contracts/testing.md#independent-expectations The case authors value42 and a build counter before conversion, rather than deriving them from returned tool data.
   * @evidence contracts/testing.md#distinguishing-cases Deferred source state is separate from the method query and from native tool metadata; only execution should access it.
   * @evidence contracts/testing.md#execution-ownership Inspector's constructor/state closure and the lazy-execute case consume this fixture type; it is not a test entry.
   */
  export interface IState {
    /** Deferred numeric value. */
    value: number;
  }
  /**
   * Query consumed by the inspection fixture.
   *
   * @evidence contracts/testing.md#behavioral-verification This input type supplies query:string; lazy-execute invokes depth and asserts the resulting answer and deferred-work count.
   * @evidence contracts/testing.md#independent-expectations The authored query depth establishes expected interpolation independently of generated metadata.
   * @evidence contracts/testing.md#distinguishing-cases Query input is consumed at invocation, while reflection must not inspect deferred state during registration.
   * @evidence contracts/testing.md#execution-ownership Native Inspector reflection consumes this input type; single_controller_lazy_execute owns its actual assertion.
   */
  export interface IProps {
    /** Question to answer from the state */
    query: string;
  }
  /**
   * Answer returned by the inspection fixture.
   *
   * @evidence contracts/testing.md#behavioral-verification This type fixes answer:string; the lazy-execute case compares the complete depth=42 object in its success wrapper.
   * @evidence contracts/testing.md#independent-expectations Authored query and state literals determine answer text independently of the native result schema.
   * @evidence contracts/testing.md#distinguishing-cases The answer proves deferred state was used during execution rather than merely checking an executable callback exists.
   * @evidence contracts/testing.md#execution-ownership Inspector's reflected output and registered lazy-execute case consume this type; it owns no standalone assertions.
   */
  export interface IResult {
    /** Answer text */
    answer: string;
  }
}
