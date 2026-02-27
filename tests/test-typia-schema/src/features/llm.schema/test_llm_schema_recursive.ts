import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

export const test_llm_schema_recursive = (): void => {
  interface ICategory {
    name: string;
    children: ICategory[];
  }

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<ICategory>($defs);

  TestValidator.predicate("is reference", () => LlmTypeChecker.isReference(schema));
  TestValidator.predicate("$defs has ICategory", () => "ICategory" in $defs);

  const category = $defs["ICategory"];
  if (category && LlmTypeChecker.isObject(category)) {
    TestValidator.predicate("has name", () => "name" in category.properties);
    TestValidator.predicate("has children", () => "children" in category.properties);

    const children = category.properties["children"];
    if (children && LlmTypeChecker.isArray(children)) {
      TestValidator.predicate("children items is ref", () =>
        LlmTypeChecker.isReference(children.items),
      );
    }
  }
};
