import typia from "typia";

typia.llm.schema<[string, number]>({});
typia.llm.schema<[string, number]>({});
typia.llm.schema<[string, number]>({});
typia.llm.schema<[string, number]>({});
typia.llm.schema<[string, number]>({});

typia.llm.parameters<IProps>();
typia.llm.parameters<IProps>();
typia.llm.parameters<IProps>();
typia.llm.parameters<IProps>();
typia.llm.parameters<IProps>();

typia.llm.application<IApplication>();
typia.llm.application<IApplication>();
typia.llm.application<IApplication>();
typia.llm.application<IApplication>();
typia.llm.application<IApplication>();

interface IProps {
  input: [string, number];
}
export interface IApplication {
  /**
   * Supplies a tuple-bearing method parameter to the application rejection
   * case.
   *
   * The same tuple also appears in direct schema and parameter calls above.
   * Existing repeated calls are retained; repetition adds no separate shape.
   *
   * 1. Build the invalid-call project without ordinary type errors.
   * 2. Require a typia diagnostic naming this source and a written accessor.
   *
   * @evidence contracts/testing.md#behavioral-verification The batch harness requires failed native compilation, no ordinary compiler diagnostics and at least one typia diagnostic naming this file. This method exposes the tuple through an application parameter; the harness's per-source check does not independently require a rejection for every repeated call.
   * @evidence contracts/testing.md#independent-expectations The authored two-position string/number tuple defines the unsupported LLM schema shape. Diagnostic accessor names must occur in this source; neither generated output nor the diagnostic's own text supplies that source identity.
   * @evidence contracts/testing.md#distinguishing-cases Direct tuple schema, object parameters containing a tuple and an application method parameter preserve their three input contexts. Repeated identical calls do not establish more boundaries; accepted array shapes are owned by other cases.
   * @evidence contracts/testing.md#execution-ownership test-error/index.js builds the entire src fixture project once. This declaration is compile-time input and has no runtime method implementation or invocation.
   * @evidence contracts/e2e.md#necessary-boundary The actual TypeScript tuple must cross native analysis into LLM schema/application diagnostics. A portable schema checker cannot establish that compiler wiring.
   * @evidence contracts/e2e.md#shared-execution This method and the direct/parameter call sites share the complete diagnostic project and one build with all other error fixtures. No per-method installation, worker or compiler preparation occurs.
   * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Source fixtures remain unchanged while the harness captures diagnostics. The failed build publishes no runtime artifact; ttsc owns compiler/native artifact lifecycle and the parent owns process completion.
   * @evidence contracts/e2e.md#preserved-coverage All preexisting tuple declarations and repeated API calls remain present. The acknowledgment states the existing per-source assertion limit instead of claiming each call has an individually checked verdict.
   */
  insert(props: IProps): void;
}
