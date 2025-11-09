import typia from "typia";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_chatgpt_ObjectUnionComposite = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "ObjectUnionComposite",
    factory: ObjectUnionComposite
  })(
    typia.llm.application<ObjectUnionCompositeApplication, "chatgpt">(),
  );

interface ObjectUnionCompositeApplication {
  insert(p: { first: ObjectUnionComposite }): Promise<void>;
  reduce(p: { first: ObjectUnionComposite, second: ObjectUnionComposite | null }): Promise<ObjectUnionComposite>;
  coalesce(p: {
    first: ObjectUnionComposite | null,
    second: ObjectUnionComposite | null,
    third?: ObjectUnionComposite | null,
  }): Promise<ObjectUnionComposite | null>;
}