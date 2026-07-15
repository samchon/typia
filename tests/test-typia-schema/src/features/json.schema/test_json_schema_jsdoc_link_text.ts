import { TestValidator } from "@nestia/e2e";
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

  TestValidator.equals(
    "named interface links",
    props?.description,
    [
      "Request for ITarget; see ITarget.value.",
      "",
      "Adjacent links keep punctuation: ITarget/ITarget.value.",
    ].join("\n"),
  );
  TestValidator.equals(
    "named alias link label",
    status?.description,
    "Status for target operations.",
  );
  TestValidator.equals(
    "plain prose",
    props?.properties?.plain?.description,
    "Plain prose must remain unchanged.",
  );
  TestValidator.equals(
    "target and qualified member links",
    props?.properties?.target?.description,
    "Must match ITarget; see ITarget.value.",
  );
  TestValidator.equals(
    "pipe label",
    props?.properties?.labeled?.description,
    "Render the target contract.",
  );
  TestValidator.equals(
    "space label",
    props?.properties?.labeledWithoutPipe?.description,
    "Render the target contract.",
  );
  TestValidator.equals(
    "link variants",
    props?.properties?.variants?.description,
    "Render ITarget and ITarget.value.",
  );
  TestValidator.equals(
    "URL links",
    props?.properties?.url?.description,
    "Visit https://x.io/docs or docs.",
  );
  TestValidator.equals(
    "unresolved target link",
    props?.properties?.unresolved?.description,
    "Keep UnresolvedTarget.",
  );
  TestValidator.equals(
    "JSDoc tag link label",
    props?.properties?.titled?.title,
    "Target title",
  );

  const llm = typia.llm.application<IApplication>();
  const func = llm.functions.find((candidate) => candidate.name === "process");
  TestValidator.equals(
    "application summary link label",
    llm.description,
    "Linked application.\n\nApplication for ITarget.",
  );
  TestValidator.equals(
    "function links",
    func?.description,
    "Process one ITarget; see ITarget.value.",
  );
};
