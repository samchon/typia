import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_llm_applicationOfValidate_3_0_ObjectPartial =
  _test_llm_applicationOfValidate({
    model: "3.0",
    name: "ObjectPartial",
    factory: ObjectPartial,
  })(typia.llm.applicationOfValidate<ObjectPartialApplication, "3.0">());

interface ObjectPartialApplication {
  insert(p: { first: ObjectPartial }): Promise<void>;
  reduce(p: {
    first: ObjectPartial;
    second: ObjectPartial | null;
  }): Promise<ObjectPartial>;
  coalesce(p: {
    first: ObjectPartial | null;
    second: ObjectPartial | null;
    third?: ObjectPartial | null;
  }): Promise<ObjectPartial | null>;
}
