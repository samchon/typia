import typia from "typia";
import { ClassMethod } from "../../../structures/ClassMethod";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_gemini_ClassMethod = (): void =>
  _test_llm_application({
    model: "gemini",
    name: "ClassMethod",
    factory: ClassMethod
  })(
    typia.llm.application<ClassMethodApplication, "gemini">(),
  );

interface ClassMethodApplication {
  insert(p: { first: ClassMethod }): Promise<void>;
  reduce(p: { first: ClassMethod, second: ClassMethod | null }): Promise<ClassMethod>;
  coalesce(p: {
    first: ClassMethod | null,
    second: ClassMethod | null,
    third?: ClassMethod | null,
  }): Promise<ClassMethod | null>;
}