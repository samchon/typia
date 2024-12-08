import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_llm_applicationOfValidate_3_1_ObjectRequired =
  _test_llm_applicationOfValidate({
    model: "3.1",
    name: "ObjectRequired",
    factory: ObjectRequired,
  })(typia.llm.applicationOfValidate<ObjectRequiredApplication, "3.1">());

interface ObjectRequiredApplication {
  insert(p: { first: ObjectRequired }): Promise<void>;
  reduce(p: {
    first: ObjectRequired;
    second: ObjectRequired | null;
  }): Promise<ObjectRequired>;
  coalesce(p: {
    first: ObjectRequired | null;
    second: ObjectRequired | null;
    third?: ObjectRequired | null;
  }): Promise<ObjectRequired | null>;
}
