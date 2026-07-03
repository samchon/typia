export class TicketSearch {
  /**
   * Search support tickets.
   *
   * @param props Search query
   * @returns Matching ticket summary in Markdown
   */
  public searchTickets(props: TicketSearch.IProps): TicketSearch.IResult {
    void props;
    return {
      content: "# Ticket 123\nStatus: Open\n\nDescription: Payment failed",
    };
  }
}

export namespace TicketSearch {
  export interface IProps {
    /** Search query */
    query: string;
  }

  /** Markdown summary returned by the search. */
  export interface IResult {
    /** Markdown text for model-facing ticket context */
    content: string;
  }
}
