import typia from "typia";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_chatgpt_ObjectUnionExplicit = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "ObjectUnionExplicit",
    factory: ObjectUnionExplicit
  })(
    typia.llm.application<ObjectUnionExplicitApplication, "chatgpt">(),
  );

interface ObjectUnionExplicitApplication {
  insert(p: { first: ObjectUnionExplicit }): Promise<void>;
  reduce(p: { first: ObjectUnionExplicit, second: ObjectUnionExplicit | null }): Promise<ObjectUnionExplicit>;
  coalesce(p: {
    first: ObjectUnionExplicit | null,
    second: ObjectUnionExplicit | null,
    third?: ObjectUnionExplicit | null,
  }): Promise<ObjectUnionExplicit | null>;
}