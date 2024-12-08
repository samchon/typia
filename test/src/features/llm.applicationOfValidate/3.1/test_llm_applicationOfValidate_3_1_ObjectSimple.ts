import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_llm_applicationOfValidate_3_1_ObjectSimple =
  _test_llm_applicationOfValidate({
    model: "3.1",
    name: "ObjectSimple",
    factory: ObjectSimple,
  })(typia.llm.applicationOfValidate<ObjectSimpleApplication, "3.1">());

interface ObjectSimpleApplication {
  insert(p: { first: ObjectSimple }): Promise<void>;
  reduce(p: {
    first: ObjectSimple;
    second: ObjectSimple | null;
  }): Promise<ObjectSimple>;
  coalesce(p: {
    first: ObjectSimple | null;
    second: ObjectSimple | null;
    third?: ObjectSimple | null;
  }): Promise<ObjectSimple | null>;
}
