import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";

export const test_llm_applicationOfValidate_3_1_ObjectUnionComposite =
  _test_llm_applicationOfValidate({
    model: "3.1",
    name: "ObjectUnionComposite",
    factory: ObjectUnionComposite,
  })(typia.llm.applicationOfValidate<ObjectUnionCompositeApplication, "3.1">());

interface ObjectUnionCompositeApplication {
  insert(p: { first: ObjectUnionComposite }): Promise<void>;
  reduce(p: {
    first: ObjectUnionComposite;
    second: ObjectUnionComposite | null;
  }): Promise<ObjectUnionComposite>;
  coalesce(p: {
    first: ObjectUnionComposite | null;
    second: ObjectUnionComposite | null;
    third?: ObjectUnionComposite | null;
  }): Promise<ObjectUnionComposite | null>;
}
