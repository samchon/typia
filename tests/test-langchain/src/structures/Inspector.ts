/**
 * Deferred inspection service.
 *
 * Holds expensive state behind a closure so tool conversion can be checked
 * without building that state.
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
    /** Question to answer from the state */
    query: string;
  }
  export interface IResult {
    /** Answer text */
    answer: string;
  }
}
