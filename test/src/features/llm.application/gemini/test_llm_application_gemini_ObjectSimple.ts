import typia from "typia";
import { ObjectSimple } from "../../../structures/ObjectSimple";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_gemini_ObjectSimple = (): void =>
  _test_llm_application({
    model: "gemini",
    name: "ObjectSimple",
    factory: ObjectSimple
  })(
    typia.llm.application<ObjectSimpleApplication, "gemini">(),
  );

interface ObjectSimpleApplication {
  insert(p: { first: ObjectSimple }): Promise<void>;
  reduce(p: { first: ObjectSimple, second: ObjectSimple | null }): Promise<ObjectSimple>;
  coalesce(p: {
    first: ObjectSimple | null,
    second: ObjectSimple | null,
    third?: ObjectSimple | null,
  }): Promise<ObjectSimple | null>;
}