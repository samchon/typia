import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_llm_applicationOfValidate_3_0_ObjectDescription =
  _test_llm_applicationOfValidate({
    model: "3.0",
    name: "ObjectDescription",
    factory: ObjectDescription,
  })(typia.llm.applicationOfValidate<ObjectDescriptionApplication, "3.0">());

interface ObjectDescriptionApplication {
  insert(p: { first: ObjectDescription }): Promise<void>;
  reduce(p: {
    first: ObjectDescription;
    second: ObjectDescription | null;
  }): Promise<ObjectDescription>;
  coalesce(p: {
    first: ObjectDescription | null;
    second: ObjectDescription | null;
    third?: ObjectDescription | null;
  }): Promise<ObjectDescription | null>;
}
