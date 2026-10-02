// separate-statement default export of a field-copy class
/**
 * Separate-statement default fixture for field-copy value imports.
 *
 * @evidence contracts/testing.md#behavioral-verification Supplies Note's actual prototype/text; the composite checks constructor identity and show result after native field copying.
 * @evidence contracts/testing.md#independent-expectations Independently imported default Note and literal hi seed define identity/content expectations.
 * @evidence contracts/testing.md#distinguishing-cases Separate default statement and instance form contrast with inline Memo and separate-default Stamp.from.
 * @evidence contracts/testing.md#execution-ownership classify_extra_calls imports Note only as a type; the extra cross-module composite owns actual callback execution and assertions.
 */
class Note {
  text!: string;
  /**
   * @evidence contracts/testing.md#behavioral-verification Returns field-copied text through the actual Note prototype; the composite asserts hi.
   * @evidence contracts/testing.md#independent-expectations Literal hi is authored before the callback and does not derive from its result.
   * @evidence contracts/testing.md#distinguishing-cases Missing default runtime binding or wrong field-copy prototype prevents method/instance observations.
   * @evidence contracts/testing.md#execution-ownership Called after native makeNote by the extra cross-module composite, without standalone registration.
   */
  show(): string {
    return this.text;
  }
}
export default Note;
