import { TestEquality } from "@typia/template/equality";
import typia from "typia";

interface ITarget {
  value: string;
}

/** Status for {@link ITarget | target operations}. */
type Status = "active" | "inactive";

/**
 * Request for {@link ITarget}; see {@link ITarget.value}.
 *
 * Adjacent links keep punctuation: {@link ITarget}/{@linkplain ITarget.value}.
 */
interface IProps {
  /** Plain prose must remain unchanged. */
  plain: string;

  /** Must match {@link ITarget}; see {@link ITarget.value}. */
  target: string;

  /** Render {@link ITarget | the target contract}. */
  labeled: string;

  /** Render {@link ITarget the target contract}. */
  labeledWithoutPipe: string;

  /** Render {@linkcode ITarget} and {@linkplain ITarget.value}. */
  variants: string;

  /** Visit {@link https://x.io/docs} or {@link https://x.io/docs | docs}. */
  url: string;

  /** Keep {@link UnresolvedTarget}. */
  unresolved: string;

  /**
   * Titled property.
   *
   * @title {@link ITarget | Target title}
   */
  titled: string;

  status: Status;
}

interface IResult {
  status: Status;
}

/**
 * Application for {@link ITarget}.
 *
 * @summary {@link ITarget | Linked application}
 */
interface IApplication {
  /** Process one {@link ITarget}; see {@linkcode ITarget.value}. */
  process(props: IProps): IResult;
}

/**
 * Verifies reflected descriptions preserve visible inline JSDoc link text.
 *
 * TypeScript-Go stores a JSDoc link's entity target in `Name()` and only its
 * trailing display text in `Text()`. The shared native metadata renderer must
 * combine both fields before JSON Schema and LLM application generation;
 * otherwise target-only links disappear and pipe labels leak their separator.
 * This case also pins ordinary prose, URL, unresolved-name, adjacent-link, and
 * JSDoc-tag behavior through the published transform surface.
 *
 * 1. Describe an application, function, named interface, alias, and properties
 *    with plain, target-only, qualified, labeled, URL, and variant links.
 * 2. Generate JSON Schema and LLM application metadata through normal typia calls.
 * 3. Assert every reflected description keeps its visible text and punctuation
 *    while tag labels lose the optional pipe separator.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that native JSON/LLM metadata preserves visible inline link text, punctuation and labels across declarations.
 * @evidence contracts/testing.md#independent-expectations Expected prose is authored from the source JSDoc link display contract rather than rendered output.
 * @evidence contracts/testing.md#distinguishing-cases Plain/qualified/labeled/URL/unresolved/adjacent/linkcode/linkplain and title/summary cases remain, spanning aliases/interfaces/properties/functions.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_jsdoc_link_text through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Compiler JSDoc Name/Text fields must assemble visible prose through JSON and LLM generation. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Plain/qualified/labeled/URL/unresolved/adjacent/linkcode/linkplain and title/summary cases remain, spanning aliases/interfaces/properties/functions. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
 */
export const test_json_schema_jsdoc_link_text = (): void => {
  const json = typia.json.application<IApplication>();
  const schemas = json.components.schemas ?? {};
  const props = schemas.IProps as
    | {
        description?: string;
        properties?: Record<string, { description?: string; title?: string }>;
      }
    | undefined;
  const status = schemas.Status as { description?: string } | undefined;

  TestEquality.equals(
    "named interface links",
    props?.description,
    [
      "Request for ITarget; see ITarget.value.",
      "",
      "Adjacent links keep punctuation: ITarget/ITarget.value.",
    ].join("\n"),
  );
  TestEquality.equals(
    "named alias link label",
    status?.description,
    "Status for target operations.",
  );
  TestEquality.equals(
    "plain prose",
    props?.properties?.plain?.description,
    "Plain prose must remain unchanged.",
  );
  TestEquality.equals(
    "target and qualified member links",
    props?.properties?.target?.description,
    "Must match ITarget; see ITarget.value.",
  );
  TestEquality.equals(
    "pipe label",
    props?.properties?.labeled?.description,
    "Render the target contract.",
  );
  TestEquality.equals(
    "space label",
    props?.properties?.labeledWithoutPipe?.description,
    "Render the target contract.",
  );
  TestEquality.equals(
    "link variants",
    props?.properties?.variants?.description,
    "Render ITarget and ITarget.value.",
  );
  TestEquality.equals(
    "URL links",
    props?.properties?.url?.description,
    "Visit https://x.io/docs or docs.",
  );
  TestEquality.equals(
    "unresolved target link",
    props?.properties?.unresolved?.description,
    "Keep UnresolvedTarget.",
  );
  TestEquality.equals(
    "JSDoc tag link label",
    props?.properties?.titled?.title,
    "Target title",
  );

  const llm = typia.llm.application<IApplication>();
  const func = llm.functions.find((candidate) => candidate.name === "process");
  TestEquality.equals(
    "application summary link label",
    llm.description,
    "Linked application.\n\nApplication for ITarget.",
  );
  TestEquality.equals(
    "function links",
    func?.description,
    "Process one ITarget; see ITarget.value.",
  );
};
