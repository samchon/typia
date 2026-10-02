/**
 * Fixed Markdown-bearing controller output for adapter delivery checks.
 *
 * @evidence contracts/testing.md#behavioral-verification tool_markdown_structured_content asserts the complete authored Markdown object arrives as structuredContent with empty fallback content.
 * @evidence contracts/testing.md#independent-expectations The fixed Markdown literal is deliberate fixture input, independent of generated controller metadata and adapter serialization.
 * @evidence contracts/testing.md#distinguishing-cases Markdown text inside an object distinguishes this case from plain numeric output; enabled duplicate text is owned by text_fallback_enabled.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor's integration Markdown case reflects and invokes this controller; the fixture owns no separate test entry.
 */
export class TicketSearch {
  /**
   * Search support tickets.
   *
   * @param props Search query
   *
   * @returns Matching ticket summary in Markdown
   *
   * @evidence contracts/testing.md#behavioral-verification tool_markdown_structured_content invokes searchTickets and compares the entire wrapper to the independently authored expected Markdown.
   * @evidence contracts/testing.md#independent-expectations This deliberate fixed fixture summary supplies data for adapter preservation; it does not simulate a ticket search implementation.
   * @evidence contracts/testing.md#distinguishing-cases The query is accepted but intentionally does not select data; the importing case owns structured delivery and default absence of duplicate text.
   * @evidence contracts/testing.md#execution-ownership The native-reflected integration Markdown export invokes this fixture through the adapter's SDK handler.
   */
  public searchTickets(props: TicketSearch.IProps): TicketSearch.IResult {
    void props;
    return {
      content: "# Ticket 123\nStatus: Open\n\nDescription: Payment failed",
    };
  }
}

export namespace TicketSearch {
  /**
   * Required query argument used to call the fixture tool.
   *
   * @evidence contracts/testing.md#behavioral-verification The Markdown integration case supplies query payment before asserting returned structured content.
   * @evidence contracts/testing.md#independent-expectations The authored required string is fixture input to reflection; no search-quality expectation is inferred.
   * @evidence contracts/testing.md#distinguishing-cases This fixture contributes Markdown output preservation; malformed argument coverage belongs to Calculator's validation case.
   * @evidence contracts/testing.md#execution-ownership tool_markdown_structured_content consumes this reflected argument interface under DynamicExecutor.
   */
  export interface IProps {
    /** Search query */
    query: string;
  }

  /**
   * Markdown summary returned by the fixture.
   *
   * @evidence contracts/testing.md#behavioral-verification The Markdown case checks a content string within the complete structuredContent object and an empty fallback array.
   * @evidence contracts/testing.md#independent-expectations The authored required content string and fixed literal define the wrapper independently of generated output schemas.
   * @evidence contracts/testing.md#distinguishing-cases An object containing Markdown distinguishes structured delivery from a JSON text rendering; fallback-enabled behavior is a sibling case.
   * @evidence contracts/testing.md#execution-ownership DynamicExecutor's Markdown integration export consumes this native-reflected result interface.
   */
  export interface IResult {
    /** Markdown text for model-facing ticket context */
    content: string;
  }
}
