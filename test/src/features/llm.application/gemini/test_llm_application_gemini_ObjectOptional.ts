import typia from "typia";
import { ObjectOptional } from "../../../structures/ObjectOptional";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_gemini_ObjectOptional = (): void =>
  _test_llm_application({
    model: "gemini",
    name: "ObjectOptional",
    factory: ObjectOptional
  })(
    typia.llm.application<ObjectOptionalApplication, "gemini">(),
  );

interface ObjectOptionalApplication {
  insert(p: { first: ObjectOptional }): Promise<void>;
  reduce(p: { first: ObjectOptional, second: ObjectOptional | null }): Promise<ObjectOptional>;
  coalesce(p: {
    first: ObjectOptional | null,
    second: ObjectOptional | null,
    third?: ObjectOptional | null,
  }): Promise<ObjectOptional | null>;
}