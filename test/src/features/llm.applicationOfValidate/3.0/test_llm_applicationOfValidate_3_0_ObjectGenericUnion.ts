import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_llm_applicationOfValidate_3_0_ObjectGenericUnion =
  _test_llm_applicationOfValidate({
    model: "3.0",
    name: "ObjectGenericUnion",
    factory: ObjectGenericUnion,
  })(typia.llm.applicationOfValidate<ObjectGenericUnionApplication, "3.0">());

interface ObjectGenericUnionApplication {
  insert(p: { first: ObjectGenericUnion }): Promise<void>;
  reduce(p: {
    first: ObjectGenericUnion;
    second: ObjectGenericUnion | null;
  }): Promise<ObjectGenericUnion>;
  coalesce(p: {
    first: ObjectGenericUnion | null;
    second: ObjectGenericUnion | null;
    third?: ObjectGenericUnion | null;
  }): Promise<ObjectGenericUnion | null>;
}
