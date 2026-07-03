import { TestValidator } from "@nestia/e2e";
import { ILlmApplication } from "@typia/interface";
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

  TestValidator.equals(
    "summary and body are merged",
    app.description,
    "Animal record service.\n\nStores the selected animal variant into the database.",
  );
};
