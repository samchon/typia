import fs from "fs";
import typia from "typia";

import { TestGlobal } from "../../TestGlobal";

/**
 * Reader for the shared Protobuf varint corpus.
 *
 * `packages/typia/test/protobuf_varint_corpus.json` is the single source of
 * truth for the varint boundary: every byte string that exercises it, and the
 * verdict the reference Go Protobuf parser returns for it. The Go test
 * `TestProtobufVarintCorpusMatchesProtowire` proves those verdicts still match
 * `google.golang.org/protobuf`, and the regressions here read the very same
 * rows through typia's runtime reader and generated decoders. Neither side
 * transcribes a byte string or a verdict of its own, so the two cannot drift
 * apart while both stay green.
 *
 * The corpus is `protowire`'s verdict rather than every runtime's, and its
 * `strictness` field records where that matters: on a tenth byte carrying
 * payload above bit 63 the specification is silent and the Java runtime is
 * lenient, while `protowire` rejects. typia follows `protowire`.
 *
 * A fault class, not a message, is what the corpus records. The mapping from a
 * class to the exact text typia raises lives in {@link message} — one table, in
 * one place, rather than a string repeated across the regressions.
 */
export namespace ProtobufVarintCorpus {
  /** The wire fault classes the corpus distinguishes. */
  export type Fault = "truncated" | "overlong" | "overflow";

  /** One corpus row. */
  export interface IEntry {
    /** Unique label, used as the failure label of every derived assertion. */
    name: string;

    /** Lowercase hexadecimal bytes, standing at the start of a buffer. */
    bytes: string & typia.tags.Pattern<"^([0-9a-f]{2})*$">;

    /**
     * Bytes `protowire.ConsumeVarint` consumes: the varint width when it
     * accepts, `-1` when the buffer truncates it, `-3` when it overflows.
     */
    consumed: number & typia.tags.Type<"int32">;

    /**
     * Decimal unsigned 64-bit value the oracle decodes, as a string because it
     * exceeds an IEEE-754 double. `null` whenever the oracle rejects.
     */
    value: string | null;

    /** `null` when the oracle accepts, otherwise the wire fault class. */
    fault: Fault | null;
  }

  /**
   * Every corpus row, in file order.
   *
   * @evidence contracts/testing.md#behavioral-verification entries only reads the shared corpus file and projects entries for the varint regression cases; it asserts nothing itself.
   * @evidence contracts/testing.md#independent-expectations The corpus is verified against the protowire reference by the Go test that owns the file; the helper adds no expectation.
   * @evidence contracts/testing.md#distinguishing-cases It owns no case distinction; callers select accepted, malformed or truncated entries.
   * @evidence contracts/testing.md#execution-ownership It reads a committed JSON file in process from the test-typia-schema start process.
   */
  export const entries = (): IEntry[] => document().entries;

  /**
   * Rows the oracle accepts, each carrying a decoded value.
   *
   * @evidence contracts/testing.md#behavioral-verification accepted only reads the shared corpus file and projects entries for the varint regression cases; it asserts nothing itself.
   * @evidence contracts/testing.md#independent-expectations The corpus is verified against the protowire reference by the Go test that owns the file; the helper adds no expectation.
   * @evidence contracts/testing.md#distinguishing-cases It owns no case distinction; callers select accepted, malformed or truncated entries.
   * @evidence contracts/testing.md#execution-ownership It reads a committed JSON file in process from the test-typia-schema start process.
   */
  export const accepted = (): IEntry[] =>
    entries().filter((entry) => entry.fault === null);

  /**
   * Rows the oracle rejects for leaving the wire domain rather than for running
   * out of buffer, so no further byte could rescue them.
   *
   * @evidence contracts/testing.md#behavioral-verification malformed only reads the shared corpus file and projects entries for the varint regression cases; it asserts nothing itself.
   * @evidence contracts/testing.md#independent-expectations The corpus is verified against the protowire reference by the Go test that owns the file; the helper adds no expectation.
   * @evidence contracts/testing.md#distinguishing-cases It owns no case distinction; callers select accepted, malformed or truncated entries.
   * @evidence contracts/testing.md#execution-ownership It reads a committed JSON file in process from the test-typia-schema start process.
   */
  export const malformed = (): IEntry[] =>
    entries().filter(
      (entry) => entry.fault === "overlong" || entry.fault === "overflow",
    );

  /**
   * Rows whose buffer ends before the varint terminates.
   *
   * @evidence contracts/testing.md#behavioral-verification truncated only reads the shared corpus file and projects entries for the varint regression cases; it asserts nothing itself.
   * @evidence contracts/testing.md#independent-expectations The corpus is verified against the protowire reference by the Go test that owns the file; the helper adds no expectation.
   * @evidence contracts/testing.md#distinguishing-cases It owns no case distinction; callers select accepted, malformed or truncated entries.
   * @evidence contracts/testing.md#execution-ownership It reads a committed JSON file in process from the test-typia-schema start process.
   */
  export const truncated = (): IEntry[] =>
    entries().filter((entry) => entry.fault === "truncated");

  /**
   * The row carrying `name`, or a failure naming the missing row.
   *
   * @evidence contracts/testing.md#behavioral-verification find only reads the shared corpus file and projects entries for the varint regression cases; it asserts nothing itself.
   * @evidence contracts/testing.md#independent-expectations The corpus is verified against the protowire reference by the Go test that owns the file; the helper adds no expectation.
   * @evidence contracts/testing.md#distinguishing-cases It owns no case distinction; callers select accepted, malformed or truncated entries.
   * @evidence contracts/testing.md#execution-ownership It reads a committed JSON file in process from the test-typia-schema start process.
   */
  export const find = (name: string): IEntry => {
    const entry: IEntry | undefined = entries().find(
      (candidate) => candidate.name === name,
    );
    if (entry === undefined)
      throw new Error(
        `the shared varint corpus carries no entry named ${JSON.stringify(name)}.`,
      );
    return entry;
  };

  /**
   * Corpus bytes as octets.
   *
   * @evidence contracts/testing.md#behavioral-verification bytes only reads the shared corpus file and projects entries for the varint regression cases; it asserts nothing itself.
   * @evidence contracts/testing.md#independent-expectations The corpus is verified against the protowire reference by the Go test that owns the file; the helper adds no expectation.
   * @evidence contracts/testing.md#distinguishing-cases It owns no case distinction; callers select accepted, malformed or truncated entries.
   * @evidence contracts/testing.md#execution-ownership It reads a committed JSON file in process from the test-typia-schema start process.
   */
  export const bytes = (entry: IEntry): number[] =>
    (entry.bytes.match(/../g) ?? []).map((pair) => Number.parseInt(pair, 16));

  /**
   * The same varint re-headed as the tag of field 17, wire type VARIANT.
   *
   * Only the leading byte is replaced, and only by another continuation byte,
   * so the varint keeps its recorded width and therefore its recorded fault.
   *
   * @evidence contracts/testing.md#behavioral-verification asTag only reads the shared corpus file and projects entries for the varint regression cases; it asserts nothing itself.
   * @evidence contracts/testing.md#independent-expectations The corpus is verified against the protowire reference by the Go test that owns the file; the helper adds no expectation.
   * @evidence contracts/testing.md#distinguishing-cases It owns no case distinction; callers select accepted, malformed or truncated entries.
   * @evidence contracts/testing.md#execution-ownership It reads a committed JSON file in process from the test-typia-schema start process.
   */
  export const asTag = (entry: IEntry): number[] => {
    const octets: number[] = bytes(entry);
    if (octets.length === 0 || (octets[0]! & 0x80) === 0)
      throw new Error(
        `${entry.name} does not open with a continuation byte, so re-heading it would change its width.`,
      );
    return [0x88, ...octets.slice(1)];
  };

  /**
   * The decoded value of an accepted row.
   *
   * @evidence contracts/testing.md#behavioral-verification value only reads the shared corpus file and projects entries for the varint regression cases; it asserts nothing itself.
   * @evidence contracts/testing.md#independent-expectations The corpus is verified against the protowire reference by the Go test that owns the file; the helper adds no expectation.
   * @evidence contracts/testing.md#distinguishing-cases It owns no case distinction; callers select accepted, malformed or truncated entries.
   * @evidence contracts/testing.md#execution-ownership It reads a committed JSON file in process from the test-typia-schema start process.
   */
  export const value = (entry: IEntry): bigint => {
    if (entry.value === null)
      throw new Error(
        `${entry.name} is rejected by the oracle, so it carries no value.`,
      );
    return BigInt(entry.value);
  };

  /**
   * The exact error typia must raise for a rejected row.
   *
   * @evidence contracts/testing.md#behavioral-verification message only reads the shared corpus file and projects entries for the varint regression cases; it asserts nothing itself.
   * @evidence contracts/testing.md#independent-expectations The corpus is verified against the protowire reference by the Go test that owns the file; the helper adds no expectation.
   * @evidence contracts/testing.md#distinguishing-cases It owns no case distinction; callers select accepted, malformed or truncated entries.
   * @evidence contracts/testing.md#execution-ownership It reads a committed JSON file in process from the test-typia-schema start process.
   */
  export const message = (entry: IEntry): string => {
    if (entry.fault === null)
      throw new Error(
        `${entry.name} is accepted by the oracle, so it raises no error.`,
      );
    return MESSAGES[entry.fault];
  };

  /** The prefix every Protobuf wire error carries. */
  export const PREFIX = "Error on typia.protobuf.decode(): ";

  interface IDocument {
    specification: string;
    oracle: string;
    purpose: string;
    strictness: string;
    consumers: string[];
    fields: Record<string, string>;
    faults: Record<string, string>;
    entries: IEntry[];
  }

  /**
   * Parse the corpus once, asserting its shape.
   *
   * The assertion is not ceremony: a corpus that lost a field, or gained a
   * fault class no regression knows how to expect, must fail loudly here
   * instead of silently narrowing what the regressions cover.
   */
  const document = (): IDocument => {
    if (parsed === null) {
      parsed = typia.assert<IDocument>(
        JSON.parse(fs.readFileSync(LOCATION, "utf8")),
      );
      if (parsed.entries.length === 0)
        throw new Error(`the shared varint corpus at ${LOCATION} is empty.`);
    }
    return parsed;
  };

  let parsed: IDocument | null = null;

  const LOCATION = `${TestGlobal.ROOT}/../../packages/typia/test/protobuf_varint_corpus.json`;

  const MESSAGES: Record<Fault, string> = {
    truncated: `${PREFIX}buffer overflow.`,
    overlong: `${PREFIX}varint exceeds 10 bytes.`,
    overflow: `${PREFIX}varint exceeds 64 bits.`,
  };
}
