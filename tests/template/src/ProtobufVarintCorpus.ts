import fs from "fs";
import path from "path";
import type { tags } from "typia";

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
 * The template helper validates the complete document without a native plugin
 * and caches the borrowed rows. Callers must not mutate returned entries; the
 * accepted/malformed/truncated projections allocate only their outer arrays.
 *
 * A fault class, not a message, is what the corpus records. The mapping from a
 * class to the exact text typia raises lives in {@link message} — one table, in
 * one place, rather than a string repeated across the regressions.
 */
export namespace ProtobufVarintCorpus {
  /**
   * Wire faults distinguished independently by the reference parser.
   *
   * A truncated prefix could become valid with more bytes; an overlong or
   * overflowing prefix already exceeds the unsigned 64-bit wire domain.
   */
  export type Fault = "truncated" | "overlong" | "overflow";

  /** One oracle-owned varint byte sequence, value and fault verdict. */
  export interface IEntry {
    /** Unique label, used as the failure label of every derived assertion. */
    name: string;

    /** Lowercase hexadecimal bytes, standing at the start of a buffer. */
    bytes: string & tags.Pattern<"^([0-9a-f]{2})*$">;

    /**
     * Bytes `protowire.ConsumeVarint` consumes: the varint width when it
     * accepts, `-1` when the buffer truncates it, `-3` when it overflows.
     */
    consumed: number & tags.Type<"int32">;

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
   * The array and entries are borrowed from the lazy validated cache. Neither
   * this result nor its members may be mutated by a consumer.
   */
  export const entries = (): IEntry[] => document().entries;

  /**
   * Rows the oracle accepts, each carrying a decoded value.
   *
   * The result array is new, but its rows remain borrowed from the cache.
   * Acceptance is the recorded null fault, not a typia-reader result.
   */
  export const accepted = (): IEntry[] =>
    entries().filter((entry) => entry.fault === null);

  /**
   * Rows the oracle rejects for leaving the wire domain rather than for running
   * out of buffer, so no further byte could rescue them.
   *
   * The new array contains borrowed rows in corpus order; truncation belongs to
   * its separate projection because further bytes can change that verdict.
   */
  export const malformed = (): IEntry[] =>
    entries().filter(
      (entry) => entry.fault === "overlong" || entry.fault === "overflow",
    );

  /**
   * Rows whose buffer ends before the varint terminates.
   *
   * These prefixes may become valid with more input. The array is new and its
   * rows remain borrowed from the validated cache.
   */
  export const truncated = (): IEntry[] =>
    entries().filter((entry) => entry.fault === "truncated");

  /**
   * The row carrying `name`, or a failure naming the missing row.
   *
   * The selected row is borrowed. A missing named control is an error rather
   * than an empty optional result that could silently narrow test coverage.
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
   * The validated lowercase pair string projects to a new number array. Empty
   * input produces an empty array; no reader verdict is computed here.
   */
  export const bytes = (entry: IEntry): number[] =>
    (entry.bytes.match(/../g) ?? []).map((pair) => Number.parseInt(pair, 16));

  /**
   * Re-heads a continuing varint with low tag bits for wire type VARIANT.
   *
   * Only the leading byte is replaced, and only by another continuation byte,
   * so the varint keeps its recorded width and therefore its recorded fault.
   * Remaining payload groups are preserved, so this does not generally encode
   * field 17: the final field number also depends on those groups.
   *
   * An empty or noncontinuing prefix throws: changing its leading byte would
   * not preserve that framing distinction. The returned byte array is new.
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
   * Decimal text converts with BigInt without IEEE-754 rounding. A null value
   * throws because a rejected oracle row has no decoded value to compare.
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
   * The three fault classes map to fixed typia wire-error text. A null fault
   * throws because an accepted oracle row must not supply a rejection message.
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

  /**
   * Parsed fixture provenance, field descriptions and oracle rows.
   *
   * Extra fields are permitted by parse; the metadata records the reference
   * implementation and its strictness rather than changing reader behavior.
   */
  export interface IDocument {
    /** Authoritative encoding specification link. */
    specification: string;

    /** Independent reference implementation whose verdicts populate rows. */
    oracle: string;

    /** What the shared fixture is intended to distinguish. */
    purpose: string;

    /** Known differences from other reference implementations. */
    strictness: string;

    /** Descriptive consumer locations; these do not enroll executable cases. */
    consumers: string[];

    /** Interpretations and units for the entry fields. */
    fields: Record<string, string>;

    /** Meanings of the oracle's fault categories. */
    faults: Record<string, string>;

    /** Oracle-owned rows, borrowed after validation and cached by the loader. */
    entries: IEntry[];
  }

  /**
   * Validate a corpus document without loading a compiler or generated guard.
   *
   * This retains the former IDocument assertion's structural checks, including
   * lowercase hex pairs, signed 32-bit consumed counts, nullable values/faults,
   * string arrays and string-valued dictionaries. Like ordinary typia.assert,
   * surplus properties remain permitted; default undefined handling permits
   * undefined dynamic dictionary values. Sparse array slots follow Array.every
   * semantics, matching the previous generated array checker.
   */
  export const parse = (input: unknown): IDocument => {
    const doc = object(input, "$input");
    for (const key of ["specification", "oracle", "purpose", "strictness"])
      string(doc[key], `$input.${key}`);
    if (!Array.isArray(doc.consumers)) fail("$input.consumers", "string[]");
    doc.consumers.forEach((value: unknown, index: number) =>
      string(value, `$input.consumers[${index}]`),
    );
    stringRecord(doc.fields, "$input.fields");
    stringRecord(doc.faults, "$input.faults");
    if (!Array.isArray(doc.entries)) fail("$input.entries", "IEntry[]");
    if (doc.entries.length === 0) fail("$input.entries", "a nonempty IEntry[]");
    doc.entries.forEach((value: unknown, index: number) => {
      const prefix = `$input.entries[${index}]`;
      const entry = object(value, prefix);
      string(entry.name, `${prefix}.name`);
      const bytes = string(entry.bytes, `${prefix}.bytes`);
      if (!/^([0-9a-f]{2})*$/.test(bytes))
        fail(`${prefix}.bytes`, "lowercase hexadecimal byte pairs");
      if (
        typeof entry.consumed !== "number" ||
        !Number.isInteger(entry.consumed) ||
        entry.consumed < -2147483648 ||
        entry.consumed > 2147483647
      )
        fail(`${prefix}.consumed`, "a signed 32-bit integer");
      if (entry.value !== null) string(entry.value, `${prefix}.value`);
      if (
        entry.fault !== null &&
        entry.fault !== "truncated" &&
        entry.fault !== "overlong" &&
        entry.fault !== "overflow"
      )
        fail(`${prefix}.fault`, "null | truncated | overlong | overflow");
    });
    return input as IDocument;
  };

  /**
   * Reject a malformed field with a stable path-bearing TypeError.
   *
   * Every rejected structural branch terminates through this function, so
   * callers cannot continue with unchecked data. One throwing function owns the
   * fixture error prefix and field-location text. The location and expected
   * shape come from the failing guard, without interpreting oracle verdicts or
   * correcting input. Its never signature records termination for control-flow
   * narrowing; messages identify the exact field.
   */
  const fail: (location: string, expected: string) => never = (
    location,
    expected,
  ) => {
    throw new TypeError(
      `Invalid Protobuf varint corpus at ${location}: expected ${expected}.`,
    );
  };

  /**
   * Require a non-null JavaScript object without imposing prototype or
   * extra-key restrictions.
   *
   * This preserves ordinary structural assertion admission, including inherited
   * fields and augmented arrays. One typeof/null guard returns the borrowed
   * record without allocation or mutation. No plain-object-only restriction or
   * JSON round trip silently narrows the former accepted contract. The comment
   * names non-null admission and borrowed identity, rather than implying deep
   * validation.
   */
  const object = (
    input: unknown,
    location: string,
  ): Record<string, unknown> => {
    if (typeof input !== "object" || input === null)
      fail(location, "an object");
    return input as Record<string, unknown>;
  };

  /**
   * Require a primitive string for the indicated corpus field.
   *
   * Primitive type checking preserves required strings while rejecting null,
   * undefined and boxed values. One guard returns the same string or delegates
   * its field failure. It does not trim, coerce, normalize or infer missing
   * content from expected fixture values. The field location is retained in
   * errors; semantic string content is validated only where a declared tag
   * requires it.
   */
  const string = (input: unknown, location: string): string => {
    if (typeof input !== "string") fail(location, "a string");
    return input as string;
  };

  /**
   * Validate enumerable own dictionary values using ordinary undefined
   * admission.
   *
   * Object.keys traversal and skipping undefined preserve the former
   * dynamic-record checker policy. One object check and one own-key loop cover
   * both fields and faults dictionaries. No invented nonempty-value or
   * inherited-key rule changes the declared record contract. The comment states
   * that undefined values are permitted and names quoted dynamic-key failure
   * locations.
   */
  const stringRecord = (input: unknown, location: string): void => {
    const record = object(input, location);
    for (const key of Object.keys(record))
      if (record[key] !== undefined)
        string(record[key], `${location}[${JSON.stringify(key)}]`);
  };

  /**
   * Load and cache the unchanged shared oracle corpus after portable
   * validation.
   *
   * The first successful read is parsed and checked before any caller borrows
   * the shared document. One private loader owns file IO and cache publication;
   * exported selectors reuse its result. The corpus bytes and verdicts stay
   * authoritative; no fixture rewrite, native compilation or generated guard
   * substitutes for validation. The loader owns the module-local cache;
   * failures leave it unpopulated, while callers must not mutate the borrowed
   * result.
   */
  const document = (): IDocument => {
    if (parsed === null) {
      parsed = parse(JSON.parse(fs.readFileSync(LOCATION, "utf8")));
      if (parsed.entries.length === 0)
        throw new Error(`the shared varint corpus at ${LOCATION} is empty.`);
    }
    return parsed;
  };

  let parsed: IDocument | null = null;

  const LOCATION = path.resolve(
    path.dirname(require.resolve("@typia/template/package.json")),
    "../../packages/typia/test/protobuf_varint_corpus.json",
  );

  const MESSAGES: Record<Fault, string> = {
    truncated: `${PREFIX}buffer overflow.`,
    overlong: `${PREFIX}varint exceeds 10 bytes.`,
    overflow: `${PREFIX}varint exceeds 64 bits.`,
  };
}
