import typia from "typia";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_3_1_ObjectUnionComposite = (): void =>
  _test_llm_applicationEquals({
    model: "3.1",
    name: "ObjectUnionComposite",
    factory: ObjectUnionComposite
  })(
    typia.llm.application<ObjectUnionCompositeApplication, "3.1", { equals: true }>(),
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