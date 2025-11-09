import typia from "typia";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_chatgpt_ObjectUnionImplicit = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "ObjectUnionImplicit",
    factory: ObjectUnionImplicit
  })(
    typia.llm.application<ObjectUnionImplicitApplication, "chatgpt">(),
  );

interface ObjectUnionImplicitApplication {
  insert(p: { first: ObjectUnionImplicit }): Promise<void>;
  reduce(p: { first: ObjectUnionImplicit, second: ObjectUnionImplicit | null }): Promise<ObjectUnionImplicit>;
  coalesce(p: {
    first: ObjectUnionImplicit | null,
    second: ObjectUnionImplicit | null,
    third?: ObjectUnionImplicit | null,
  }): Promise<ObjectUnionImplicit | null>;
}