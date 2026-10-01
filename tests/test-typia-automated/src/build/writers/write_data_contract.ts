import { NamingConvention } from "@typia/utils";

/**
 * Renders the reviewed data-operation contracts beside generated cases.
 *
 * Each description follows the actual shared helper, including its oracle
 * limits. Unsupported modes receive no description. Validator cases keep their
 * separate result/path contract renderer.
 *
 * @evidence contracts/common.md#principled-implementation Module and normalized method identify a reviewed data helper. Its authored-fixture, conversion, comparison and mutation facts determine the generated explanation; unknown operation keys return no answer instead of receiving unrelated validator claims.
 * @evidence contracts/common.md#clear-and-simple-design A fixed operation table owns differing helper facts and one renderer owns shared declaration/fixture/native-boundary wording. The common script writer places the selected description beside the same executable case it already generated.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts This operation renders documentation and changes no fixture eligibility, callback, comparison or expected result. Operation keys identify real helper responsibilities, not fixture exceptions; unresolved oracle and cross-family reuse limits remain explicit.
 * @evidence contracts/common.md#meaningful-documentation Generated prose names the operation, fixture and scenario. Testing/E2E answers identify independent expectation sources, real native connection and ownership limits, separated from the ordinary description.
 * @evidence contracts/performance.md#efficient-algorithms Key normalization and lookup select one fixed description without scanning all modes. Rendering traverses the output fragments once and allocates the necessary fixture-specific comment; work and output storage grow with that comment's length.
 *
 * @evidenceExclude contracts/performance.md#reuse-equivalent-work The fixed helper facts are initialized once and shared across fixtures. This renderer coordinates no repeated completed or in-flight rendering requests; different fixture or public-method names require different output.
 *
 * @evidence contracts/performance.md#bound-retention-and-release-resources The module retains a fixed six-entry description table. Request strings and fragments are local; the returned comment transfers to the writer, and no fixture history, file handle, process or task is retained here.
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
    " * @evidence contracts/e2e.md#shared-execution Cases within this feature directory share a TestServant worker and the workspace content-keyed plugin artifact, without per-fixture installation or build. Separate feature-family workers still cause repeated project/process preparation; minimum cross-family reuse remains unresolved.",
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
      "_test_json_stringify parses the actual JSON text and compares complete JSON-shaped data with the parsed built-in JSON.stringify result. Its special undefined-output branch handles undefined, functions and deterministic toJSON returning undefined; it checks semantic content rather than exact whitespace or property-order bytes.",
    oracle:
      "Built-in JSON serialization and parsing establish the reference projection; primitive_equal_to delegates symmetric data comparison to the shared TestEquality oracle. The reference is computed after the native callback on the shared input, so pre-call input preservation is not independently established. Authored fixture conversions are assumed deterministic.",
    contribution:
      "The eligible JSONABLE fixture supplies a clean serialization scenario, including its nested or scalar values and declared conversion behavior. SPOILERS are not applied by this stringify helper.",
    state:
      "The helper generates one local value and local JSON texts/projections. Deterministic fixture conversion is required because native and built-in serialization observe the same value; the helper does not assert input non-mutation or arbitrary stateful toJSON behavior.",
  },
  "plain.clone": {
    behavior:
      "_test_plain_clone compares the callback result with the fixture's declared resolved projection through resolved_equal_to. It checks projected data and the strict oracle's applicable value/brand distinctions; it does not require a distinct object graph or independently prove clone alias isolation.",
    oracle:
      "The input and optional authored factory.RESOLVE supply the reference projection rather than using another native clone as the oracle. The comparison runs after the callback on the shared input; it does not independently establish pre-call data preservation. The resolving oracle also permits absent/null/empty-container equivalences for protocol round trips, so this case does not certify their suitability for every clone input.",
    contribution:
      "The JSONABLE and RESOLVABLE fixture supplies one clean projection/clone comparison. This case applies no fixture SPOILERS and does not replace a separate clone-ownership regression.",
    state:
      "One fresh fixture value and callback result are local to the helper. Factory projection is authored rather than replaced; alias independence and source non-mutation are not asserted by this helper and remain review obligations.",
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
};
