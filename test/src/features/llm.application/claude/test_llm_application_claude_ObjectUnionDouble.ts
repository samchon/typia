import typia from "typia";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_claude_ObjectUnionDouble = (): void =>
  _test_llm_application({
    model: "claude",
    name: "ObjectUnionDouble",
    factory: ObjectUnionDouble
  })(
    typia.llm.application<ObjectUnionDoubleApplication, "claude">(),
  );

interface ObjectUnionDoubleApplication {
  insert(p: { first: ObjectUnionDouble }): Promise<void>;
  reduce(p: { first: ObjectUnionDouble, second: ObjectUnionDouble | null }): Promise<ObjectUnionDouble>;
  coalesce(p: {
    first: ObjectUnionDouble | null,
    second: ObjectUnionDouble | null,
    third?: ObjectUnionDouble | null,
  }): Promise<ObjectUnionDouble | null>;
}