/**
 * ## What This MCP Is
 *
 * `inspect` answers questions from a resident in-memory graph. The server
 * responds to the MCP handshake immediately and builds the graph only on the
 * first tool call, so a large project cannot make the client give up before the
 * tools are advertised.
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
   * @returns The matching answer
   */
  public inspect(props: Inspector.IProps): Inspector.IResult {
    return { answer: `${props.query}=${this.state().value}` };
  }
}
export namespace Inspector {
  export interface IState {
    value: number;
  }
  export interface IProps {
    /** Question to answer from the graph */
    query: string;
  }
  export interface IResult {
    /** Answer text */
    answer: string;
  }
}
