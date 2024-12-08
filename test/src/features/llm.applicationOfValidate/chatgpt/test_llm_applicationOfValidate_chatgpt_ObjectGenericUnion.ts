import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_llm_applicationOfValidate_chatgpt_ObjectGenericUnion =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "ObjectGenericUnion",
    factory: ObjectGenericUnion,
  })(
    typia.llm.applicationOfValidate<ObjectGenericUnionApplication, "chatgpt">(),
  );

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
