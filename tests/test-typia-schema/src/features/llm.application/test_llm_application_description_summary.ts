import { ILlmApplication } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies ILlmApplication.description merges a distinct @summary tag with the
 * body paragraph.
 *
 * When the author writes an explicit `@summary` that is not just the first line
 * of the body, the generator must join them the same way function descriptions
 * do — the summary (its trailing period trimmed) followed by a blank line and
 * the body. This pins the merge branch that a plain single-paragraph comment
 * never reaches, since there the summary is derived from the body and is
 * already its prefix.
 *
 * 1. Declare an interface whose JSDoc has a body paragraph and a separate
 *    `@summary` tag.
 * 2. Call typia.llm.application<Interface>().
 * 3. Assert application.description is "<summary>.\n\n<body>".
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.application is evaluated by the native host on the types declared in this case and the result is checked by 1 assertion (summary and body are merged). The case documents its purpose as: Verifies ILlmApplication.description merges a distinct @summary tag with the body paragraph.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: When the author writes an explicit `@summary` that is not just the first line of the body, the generator must join them the same way function descriptions do — the summary (its trailing period trimmed) followed by a blank line and the body. This pins the merge branch that a plain single-paragraph comment never reaches, since there the summary is derived from the body and is already its prefix. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (summary and body are merged) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_application_description_summary is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_application_description_summary = (): void => {
  /**
   * Stores the selected animal variant into the database.
   *
   * @summary Animal record service
   */
  interface IAnimalService {
    create(input: { name: string }): void;
  }

  const app: ILlmApplication = typia.llm.application<IAnimalService>();

  TestEquality.equals(
    "summary and body are merged",
    app.description,
    "Animal record service.\n\nStores the selected animal variant into the database.",
  );
};
