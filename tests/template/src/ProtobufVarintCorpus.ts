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
 *
 * @evidence contracts/common.md#principled-implementation Both plugin-free reader tests and transformed decoder tests consume the same protowire-verified bytes/verdicts. Shape validation remains portable rather than requiring a second native compilation to load an oracle.
 * @evidence contracts/common.md#clear-and-simple-design The namespace owns one lazy document cache, three verdict projections and named byte/value/error helpers. The loader resolves the fixture from the template package root; parse can validate independent input without reading or changing the cache.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts No corpus row, byte sequence or reference verdict is duplicated or selected by a fixture-specific production exception. The constant fault-message mapping translates the three actual wire-fault classes; callers borrow rows without hidden mutation.
 * @evidence contracts/common.md#meaningful-documentation The prose identifies protowire provenance and its strictness limitation, describes borrowed versus allocated state and separates fault classes from typia error text. Public members explain their field units and helper failure rules.
 */
export namespace ProtobufVarintCorpus {
  /**
   * Wire faults distinguished independently by the reference parser.
   *
   * A truncated prefix could become valid with more bytes; an overlong or
   * overflowing prefix already exceeds the unsigned 64-bit wire domain.
   *
   * @evidence contracts/common.md#principled-implementation Three recorded fault literals preserve the framing-versus-wire-domain distinction without conflating typia's error text with oracle outcomes.
   * @evidence contracts/common.md#clear-and-simple-design A literal union used by row metadata, filters and the message map; it owns no parser or state.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The literals are the corpus's actual fault classes, not a hardcoded verdict for a particular row.
   * @evidence contracts/common.md#meaningful-documentation The comment explains whether more bytes could rescue the prefix, which determines the malformed/truncated split used by consumers.
   */
  export type Fault = "truncated" | "overlong" | "overflow";

  /**
   * One oracle-owned varint byte sequence, value and fault verdict.
   *
   * @evidence contracts/common.md#principled-implementation The record keeps bytes, consumed width, decimal bigint value and nullable fault together so both languages can reuse the same independent oracle outcome.
   * @evidence contracts/common.md#clear-and-simple-design Five data fields; their Pattern/int32 tags document the shape checked by parse, while helper operations remain outside the record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The record does not compute or repair its verdict. Value remains decimal text so precision above 2^53 is retained until BigInt conversion.
   * @evidence contracts/common.md#meaningful-documentation Member comments state lowercase byte spelling, consumption/error units, decimal bigint rationale and nullable verdict meaning.
   */
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
   *
   * @evidence contracts/common.md#principled-implementation Return the cached validated corpus entries as a borrowed array.
   * @evidence contracts/common.md#clear-and-simple-design Consumers share the one parsed corpus; callers must not mutate its rows or array.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The document loader owns IO/shape validation and entries adds no clone or filter. No generated validator or fixture-specific runtime verdict is used.
   * @evidence contracts/common.md#meaningful-documentation The comment states file ordering and expressly identifies the borrowed array/rows and prohibition on consumer mutation.
   */
  export const entries = (): IEntry[] => document().entries;

  /**
   * Rows the oracle accepts, each carrying a decoded value.
   *
   * The result array is new, but its rows remain borrowed from the cache.
   * Acceptance is the recorded null fault, not a typia-reader result.
   *
   * @evidence contracts/common.md#principled-implementation Select rows with a null fault from the borrowed corpus.
   * @evidence contracts/common.md#clear-and-simple-design Selection depends only on the recorded oracle verdict, never on the runtime reader.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Filtering returns a fresh array while the selected entry objects remain borrowed. No generated validator or fixture-specific runtime verdict is used.
   * @evidence contracts/common.md#meaningful-documentation The prose distinguishes an allocated outer array from borrowed rows and explains the oracle-owned null-fault predicate.
   */
  export const accepted = (): IEntry[] =>
    entries().filter((entry) => entry.fault === null);

  /**
   * Rows the oracle rejects for leaving the wire domain rather than for running
   * out of buffer, so no further byte could rescue them.
   *
   * The new array contains borrowed rows in corpus order; truncation belongs to
   * its separate projection because further bytes can change that verdict.
   *
   * @evidence contracts/common.md#principled-implementation Select overlong and overflow rows that cannot be rescued by more bytes.
   * @evidence contracts/common.md#clear-and-simple-design These two recorded oracle fault classes differ from truncation.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The filter names exactly those two fault values and leaves corpus order intact. No generated validator or fixture-specific runtime verdict is used.
   * @evidence contracts/common.md#meaningful-documentation The prose explains irrecoverable prefixes versus truncation and preserves explicit row-borrowing and order information.
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
   *
   * @evidence contracts/common.md#principled-implementation Select rows rejected because their available buffer ends before termination.
   * @evidence contracts/common.md#clear-and-simple-design The recorded truncated fault class owns this subset, separate from malformed widths.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Filtering returns a fresh array without changing entry values. No generated validator or fixture-specific runtime verdict is used.
   * @evidence contracts/common.md#meaningful-documentation The comment explains why truncation is a separate subset and identifies which returned state is allocated versus borrowed.
   */
  export const truncated = (): IEntry[] =>
    entries().filter((entry) => entry.fault === "truncated");

  /**
   * The row carrying `name`, or a failure naming the missing row.
   *
   * The selected row is borrowed. A missing named control is an error rather
   * than an empty optional result that could silently narrow test coverage.
   *
   * @evidence contracts/common.md#principled-implementation Resolve a corpus label or fail with the exact missing-label description.
   * @evidence contracts/common.md#clear-and-simple-design Named positive/negative controls must fail loudly if their fixture row vanishes.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A single find reads the shared entries and returns their borrowed matching row. No generated validator or fixture-specific runtime verdict is used.
   * @evidence contracts/common.md#meaningful-documentation The comment states borrowing and why a missing control must throw instead of silently reducing coverage.
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
   *
   * @evidence contracts/common.md#principled-implementation Project lowercase hexadecimal byte pairs into numeric octets.
   * @evidence contracts/common.md#clear-and-simple-design parse validates complete lowercase pairs before any projection; the empty byte string remains valid.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Pair matching and base-16 conversion do not derive any reader verdict. No generated validator or fixture-specific runtime verdict is used.
   * @evidence contracts/common.md#meaningful-documentation The comment describes validated byte-pair spelling, new-array ownership and the empty-string result.
   */
  export const bytes = (entry: IEntry): number[] =>
    (entry.bytes.match(/../g) ?? []).map((pair) => Number.parseInt(pair, 16));

  /**
   * The same varint re-headed as the tag of field 17, wire type VARIANT.
   *
   * Only the leading byte is replaced, and only by another continuation byte,
   * so the varint keeps its recorded width and therefore its recorded fault.
   *
   * An empty or noncontinuing prefix throws: changing its leading byte would
   * not preserve that framing distinction. The returned byte array is new.
   *
   * @evidence contracts/common.md#principled-implementation Re-head a continuing varint as field 17 wire VARIANT without changing its width.
   * @evidence contracts/common.md#clear-and-simple-design Replacing only an existing continuation byte preserves the framing fault; a noncontinuing or empty row fails explicitly.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The helper allocates a new byte array and changes only its first octet to 0x88. No generated validator or fixture-specific runtime verdict is used.
   * @evidence contracts/common.md#meaningful-documentation The comment names field 17, wire type and why leading continuation is required, and identifies failure and result ownership.
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
   *
   * @evidence contracts/common.md#principled-implementation Read the accepted-row decimal value as bigint and reject a null value.
   * @evidence contracts/common.md#clear-and-simple-design Expected values come from the protowire corpus rather than a typia reader.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts BigInt performs the numeric parse; rejected rows fail with a named missing-value error. No generated validator or fixture-specific runtime verdict is used.
   * @evidence contracts/common.md#meaningful-documentation The prose states the precision-preserving conversion and the reason null values cannot supply an expectation.
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
   *
   * @evidence contracts/common.md#principled-implementation Resolve a rejected row to the stable typia wire-fault message.
   * @evidence contracts/common.md#clear-and-simple-design The fixed three-class table distinguishes truncation, overlong width and excess payload; accepted rows have no fault message.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The helper rejects null faults before indexing the table and changes no row. No generated validator or fixture-specific runtime verdict is used.
   * @evidence contracts/common.md#meaningful-documentation The comment separates oracle class from typia message and explains why accepted rows cannot be used as rejection controls.
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
   *
   * @evidence contracts/common.md#principled-implementation Provenance, interpretation descriptions and entries stay in one typed document; parse validates each field before the loader shares it.
   * @evidence contracts/common.md#clear-and-simple-design Eight required data fields, with no methods; only entries owns wire cases and the other fields explain the oracle contract.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The record does not alter corpus contents or derive typia reader outcomes. Extra metadata is allowed rather than used as a fixture-specific gate.
   * @evidence contracts/common.md#meaningful-documentation The declaration and members explain oracle provenance, strictness, consumers, descriptions and row ownership.
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
   *
   * @evidence contracts/common.md#principled-implementation Every required document and row field is checked before the fixture is shared. The bytes pattern and signed 32-bit bounds preserve the declared tags, while the nullable value/fault branches retain every former case distinction.
   * @evidence contracts/common.md#clear-and-simple-design One parse entry calls private object/string/string-record guards and validates a nonempty entries array. The loader alone owns file IO and caching; callers can independently exercise malformed documents without touching that cache.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Expectations remain in the unchanged protowire corpus. Validation checks its declared structural contract, not particular row names or verdicts; no native guard is built merely to load portable fixture data.
   * @evidence contracts/common.md#meaningful-documentation The comment names all tagged checks, surplus-key and undefined-record policies and sparse-array behavior. Failure messages identify the field path whose shape is invalid.
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
