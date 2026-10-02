/**
 * ## What This MCP Is
 *
 * `inspect` answers questions from a resident in-memory graph. The server
 * responds to the MCP handshake immediately and builds the graph only on the
 * first tool call, so a large project cannot make the client give up before the
 * tools are advertised.
 *
 * @evidence contracts/testing.md#behavioral-verification create_server_lazy_controller checks reflected instructions, zero state builds during listing, one build on first call and depth=42 output.
 * @evidence contracts/testing.md#independent-expectations Authored class prose and the consumer's state supplier counter define the expected instruction and invocation boundaries.
 * @evidence contracts/testing.md#distinguishing-cases Listing versus first call distinguishes deferred access; this fixture makes no memoization or concurrency claim.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor's native-controller lazy case constructs this fixture with a local supplier; the constructor closure and state field remain private support.
 */
export class Inspector {
  private readonly state: () => Inspector.IState;

  public constructor(source: Inspector.IState | (() => Inspector.IState)) {
    this.state = typeof source === "function" ? source : () => source;
  }

  /**
   * Inspect the resident graph.
   *
   * @param props Query to run against the graph
   *
   * @returns The matching answer
   *
   * @evidence contracts/testing.md#behavioral-verification create_server_lazy_controller calls inspect with query depth and checks answer depth=42 plus one supplier invocation.
   * @evidence contracts/testing.md#independent-expectations Authored string interpolation combines the request query and supplied value; consumer literals establish the expected answer.
   * @evidence contracts/testing.md#distinguishing-cases The method accesses the supplier only during execution, contrasting with nonexecuting tool discovery; repeat calls are not asserted.
   * @evidence contracts/testing.md#execution-ownership The integration lazy-controller export invokes this native-reflected method through the adapter handler.
   */
  public inspect(props: Inspector.IProps): Inspector.IResult {
    return { answer: `${props.query}=${this.state().value}` };
  }
}
export namespace Inspector {
  /**
   * Resident value supplied on demand.
   *
   * @evidence contracts/testing.md#behavioral-verification The lazy-controller case supplies value 42 and checks it appears in inspect's answer after one supplier invocation.
   * @evidence contracts/testing.md#independent-expectations The authored value number and literal 42 are fixture input, not derived from generated metadata.
   * @evidence contracts/testing.md#distinguishing-cases The consumer owns deferred supplier versus discovery behavior; this state shape owns no separate malformed-value test.
   * @evidence contracts/testing.md#execution-ownership The integration case supplies this private-state input through Inspector's constructor.
   */
  export interface IState {
    value: number;
  }
  /**
   * Inspection query reflected into tool arguments.
   *
   * @evidence contracts/testing.md#behavioral-verification The lazy-controller case calls the reflected tool with query depth and checks the resulting answer.
   * @evidence contracts/testing.md#independent-expectations The authored required string and literal query establish fixture input independently of reflection.
   * @evidence contracts/testing.md#distinguishing-cases This query reaches deferred execution; numeric coercion and invalid argument rejection use Calculator's separate fixture.
   * @evidence contracts/testing.md#execution-ownership DynamicExecutor's lazy-controller case consumes this reflected input type.
   */
  export interface IProps {
    /** Question to answer from the graph */
    query: string;
  }
  /**
   * Inspection answer reflected into structured output.
   *
   * @evidence contracts/testing.md#behavioral-verification The lazy-controller case asserts the complete structured answer object equals depth=42.
   * @evidence contracts/testing.md#independent-expectations Authored answer string, query depth and supplied value 42 establish the expected result.
   * @evidence contracts/testing.md#distinguishing-cases The structured result complements the same case's zero-build listing assertion; malformed output belongs to separate enforcement cases.
   * @evidence contracts/testing.md#execution-ownership The integration lazy-controller export consumes this native-reflected return interface.
   */
  export interface IResult {
    /** Answer text */
    answer: string;
  }
}
