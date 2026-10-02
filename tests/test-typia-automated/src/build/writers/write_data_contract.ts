import { NamingConvention } from "@typia/utils";

/**
 * Renders the reviewed data-operation contracts beside generated cases.
 *
 * Each description follows the actual shared helper, including its oracle
 * limits. Unsupported modes receive no description. Validator cases keep their
 * separate result/path contract renderer.
 *
 * @evidence contracts/testing.md#behavioral-verification This renderer writes descriptions for actual stringify/clone/prune/HTTP helpers without executing or changing their assertions. Its operation table identifies content, mutation or transport comparisons; write_common retains the actual typed callback binding beside the returned comment.
 * @evidence contracts/testing.md#independent-expectations Authored fixtures/RESOLVE, pre-call platform JSON text, independent clone/prune graph snapshots and maintained transport encoders supply the helper-specific expectation facts. Shared native record checks and successful transport roundtrips retain their disclosed correlation/spelling limitations rather than becoming independent oracles through this text.
 * @evidence contracts/testing.md#distinguishing-cases create-prefixed method normalization selects the same actual helper facts; unknown keys return empty text rather than unrelated validator claims. The table distinguishes clean-only operations from header spoiler variants and byte-aware async FormData comparisons; this renderer adds no runtime case.
 * @evidence contracts/testing.md#execution-ownership write_common invokes this fallback after the validator renderer. The fixed FACTS table and returned fragments belong to documentation generation; generated matching exports execute their named helpers through TestServant, with async promises retained by the source writer.
 */
export const write_data_contract = (
  props: { module: string | null; method: string },
  structure: string,
): string => {
  const method = props.method.startsWith("create")
    ? NamingConvention.localize(props.method.slice(6))
    : props.method;
  const key = `${props.module}.${method}`;
  if (!Object.hasOwn(FACTS, key)) return "";
  const facts = FACTS[key]!;
  const operation = `typia.${props.module}.${props.method}`;
  return [
    "/**",
    ` * Verifies ${operation} with the authored ${structure} fixture.`,
    " *",
    " * This case connects its TypeScript declaration to the emitted operation.",
    " * The selected helper owns the data comparison or mutation assertions.",
    " *",
    ` * 1. Produce the operation for ${structure} through its direct or factory call.`,
    " * 2. Execute the helper's fixture scenario and report its named failure.",
    " *",
    ` * @evidence contracts/testing.md#behavioral-verification ${operation} is the actual native-produced callback for ${structure}. ${facts.behavior}`,
    ` * @evidence contracts/testing.md#independent-expectations ${structure}.generate supplies the authored input independently of the callback result. ${facts.oracle}`,
    ` * @evidence contracts/testing.md#distinguishing-cases ${facts.contribution} This entry does not claim an invalid-input or malformed-output matrix that its helper does not execute; other declarations supply their distinct representation and boundary shapes.`,
    " * @evidence contracts/testing.md#execution-ownership The matching test export is discovered by TestServant in this operation's feature directory during test-typia-automated start. The entry owns its declaration/callback binding; the selected helper owns assertions and its utility dependencies.",
    ` * @evidence contracts/e2e.md#necessary-boundary The Go transformer must assemble ${operation} for ${structure} with the correct type-specific branches and runtime helper imports. Handwritten callbacks can test assertion semantics but cannot prove this emitted direct/factory operation or its declaration binding.`,
    " * @evidence contracts/e2e.md#shared-execution All generated feature families and composites share one TestServant worker, one fully generated project and the workspace content-keyed plugin artifact. No case installs, rebuilds or opens its own worker.",
    ` * @evidence contracts/e2e.md#state-isolation-and-reuse-validity ${facts.state} The callback and fixture factory are not replaced. The runner closes the connected worker in finally and ttsc owns content-keyed artifact validity; this entry does not certify cold-cache recovery or cross-family state isolation.`,
    " * @evidence contracts/e2e.md#preserved-coverage Documentation preserves the same fixture, callback construction, direct/factory spelling, helper invocation and discoverable export. Portable assertion responsibilities remain visible and must be reviewed independently; no executable assertion or coverage population is removed here.",
    " */",
  ].join("\n");
};

/** Facts read from the active helpers; private data-operation modes only. */
const FACTS: Record<
  string,
  { behavior: string; oracle: string; contribution: string; state: string }
> = {
  "json.stringify": {
    behavior:
      "_test_json_stringify prepares the built-in JSON.stringify reference before invoking the native serializer. The shared check parses actual text and compares complete JSON-shaped data while requiring the original input's post-call JSON representation to remain identical. Ignored-property mutations and changes undone before checking are not detected. Undefined-reference behavior is judged by the shared owner; this checks semantic content rather than exact whitespace or property-order bytes.",
    oracle:
      "Built-in JSON serialization and parsing establish the pre-call reference projection; the shared portable check owns symmetric data comparison and a saved JSON text, without source-graph snapshots. Authored deterministic conversion behavior remains an assumption; expected content never comes from native output.",
    contribution:
      "The eligible JSONABLE fixture supplies a clean serialization scenario, including its nested or scalar values and declared conversion behavior. SPOILERS are not applied by this stringify helper.",
    state:
      "The helper generates one local value and captures its reference and source state before invoking the native serializer. Conversion callbacks retain the shared owner's deterministic/effect-free premise; arbitrary stateful toJSON behavior is not certified here.",
  },
  "plain.clone": {
    behavior:
      "The shared _test_plain_clone snapshots the authored projection before the actual callback, then requires faithful data, unchanged original properties/references/prototypes/array lengths and no source data object reachable from the returned graph. Null and empty containers remain distinct; undefined versus absent record members follow the shared TestEquality data policy.",
    oracle:
      "Authored input and optional factory.RESOLVE are observed before callback execution. An independent ordinary-data snapshot fixes expected content; source snapshots and identity sets establish non-mutation and graph separation without another native clone or transport omission equivalence.",
    contribution:
      "The JSONABLE and RESOLVABLE fixture supplies its finite ordinary/class data graph to one clean scenario. No SPOILERS are applied here; portable units separately distinguish identity, shallow, lossy and destructive callbacks. Native/callable/effectful-accessor graphs are outside this selected fixture premise.",
    state:
      "One fresh fixture, pre-call snapshots and result remain local until the check completes. Authored projection is not replaced; source data and snapshots are not reused across cases. The comparison retains TestEquality's documented data policy rather than claiming prototype equality between a class input and plain output.",
  },
  "plain.prune": {
    behavior:
      "The shared _test_plain_prune operation captures valid graph data, injects surplus own enumerable keys, executes the callback and requires all extras removed with original valid members, references, prototypes and array lengths preserved. Its callback return value is unused.",
    oracle:
      "preparePrune records authored data before mutation and chooses fresh surplus keys independently of native output. The fixture premise is a finite ordinary mutable data graph whose reachable non-array objects have closed declared properties; ADDABLE false fixtures are excluded by the controller.",
    contribution:
      "The eligible fixture contributes its distinct closed-object graph to the real pruning callback. Portable units separately distinguish correct deletion, no-op source spellings and destructive mutation; primitive/array-only values can have no injected object-key negative scenario.",
    state:
      "The shared owner generates a fresh value, retains only local graph snapshots during callback execution and checks that value afterward. Mutated fixtures and snapshots are not reused across cases.",
  },
  "http.query": {
    behavior:
      "_test_http_query encodes the authored value with create_query, passes URLSearchParams to the actual decoder and compares its output with the fixture's resolved projection. The encoder omits undefined properties, stringifies scalar values and appends each array element under the same key.",
    oracle:
      "The original fixture and optional authored RESOLVE projection supply expected decoded data. Query preparation is a maintained test encoder rather than another typia decoder; this round-trip comparison does not independently certify every transport spelling or malformed request.",
    contribution:
      "The QUERY-eligible fixture supplies its supported scalar/array, optional and nullable fields to a clean URLSearchParams decoding scenario. Fixture SPOILERS and raw malformed-query cases are not applied here.",
    state:
      "The helper creates a fresh value and URLSearchParams per call and compares one local decoded result. Parameters, fixture data and projection state are not cached across cases.",
  },
  "http.headers": {
    behavior:
      "_test_http_headers converts fresh authored data to lower-case header keys and string values, invokes the actual decoder and compares its resolved result. The test encoder treats set-cookie arrays separately and uses the cookie semicolon versus ordinary comma separators; undefined/empty-array fields are omitted.",
    oracle:
      "The fixture's input and optional authored RESOLVE projection establish expected data independently of the decoder. headers_to_string supplies maintained transport preparation; successful round-trip equality alone does not independently prove all header spelling/separator rules.",
    contribution:
      "The HEADERS-eligible fixture supplies a clean decode/projection scenario with its declared supported fields. This ordinary headers helper applies no invalid-input spoilers; assertion/predicate/validation header families retain their separate checks.",
    state:
      "One fresh fixture, encoded header record and decoded value remain local. Header normalization changes the new record rather than replacing the fixture factory or storing request history.",
  },
  "http.formData": {
    behavior:
      "_test_http_formData prepares FormData from the authored value, invokes the actual decoder and awaits resolved_equal_to_async. It compares projected structure and asynchronously reads paired Blob/File bytes rather than accepting equal metadata alone.",
    oracle:
      "The fixture input and optional authored RESOLVE supply expected data. The maintained FormData encoder stringifies scalar entries, repeats arrays, omits undefined values and appends Blob/File parts; the asynchronous strict oracle checks binary content independently of decoder output.",
    contribution:
      "The FORMDATA-eligible fixture contributes its supported scalar/array and binary parts to a clean decoding scenario. This case applies no SPOILERS or malformed multipart matrix and does not claim a network-server boundary.",
    state:
      "The helper creates a fresh fixture/FormData/result and awaits the complete binary comparison before returning. The generated Promise<void> is returned to DynamicExecutor, so an oracle rejection stays attached to this case rather than escaping after completion.",
  },
  "http.assertHeaders": {
    behavior:
      "The assertion decoder must reproduce the clean fixture's resolved data, then reject each authored spoiler with the exact selected error prototype, native-checked TypeGuardError properties and one authored diagnostic path. A normal spoiled return fails.",
    oracle:
      "headers_to_string prepares transport from authored data, and RESOLVE supplies the expected projection. Spoiler mutations and paths are independent of decoder output; the native property-shape checker is correlated with the emitter, while error prototype identity is compared directly.",
    contribution:
      "Each HEADERS fixture retains clean data equality and every declared invalid-value rejection. One allowed error path is asserted per spoiler, rather than every invalid leaf; raw malformed transport spellings belong to separate header cases.",
    state:
      "A clean value and a separate generated value for each spoiler produce local header records. Mutation never replaces the factory or shared schema; no request history is retained.",
  },
  "http.isHeaders": {
    behavior:
      "The predicate decoder must return non-null clean data equal to the resolved projection and return null for every authored spoiled value.",
    oracle:
      "The fixture and optional RESOLVE supply expected data, and authored spoilers establish invalid values independently of the decoder. headers_to_string is maintained transport preparation; this does not independently establish every raw spelling or separator rule.",
    contribution:
      "Each HEADERS fixture contributes clean non-null content and one null rejection per spoiler. Error paths and malformed raw syntax are not asserted by this predicate helper.",
    state:
      "Each scenario gets a fresh fixture and local encoded/decoded data. No mutated value or transport record is reused between scenarios.",
  },
  "http.validateHeaders": {
    behavior:
      "The validation decoder must report clean success with faithful resolved data, then reject every authored spoiler with the complete sorted path multiset. Native assertEquals additionally checks result-record consistency.",
    oracle:
      "Authored data/RESOLVE and spoiler-returned paths establish clean content and invalid diagnostics before decoding. The extra native record check is not an independent shape oracle; transport preparation is owned by headers_to_string.",
    contribution:
      "Each HEADERS fixture contributes clean success/content and every declared invalid-value path population, including count and multiplicity. Raw transport syntax and independent result-record shape checks remain outside this helper.",
    state:
      "Fresh clean/spoiled values and local header records prevent mutation from determining another scenario. Sorted expected/actual lists and accumulated mismatches live only for this invocation.",
  },
};
