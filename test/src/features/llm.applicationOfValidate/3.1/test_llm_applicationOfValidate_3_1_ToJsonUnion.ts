import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_llm_applicationOfValidate_3_1_ToJsonUnion =
  _test_llm_applicationOfValidate({
    model: "3.1",
    name: "ToJsonUnion",
    factory: ToJsonUnion,
  })(typia.llm.applicationOfValidate<ToJsonUnionApplication, "3.1">());

interface ToJsonUnionApplication {
  insert(p: { first: ToJsonUnion }): Promise<void>;
  reduce(p: {
    first: ToJsonUnion;
    second: ToJsonUnion | null;
  }): Promise<ToJsonUnion>;
  coalesce(p: {
    first: ToJsonUnion | null;
    second: ToJsonUnion | null;
    third?: ToJsonUnion | null;
  }): Promise<ToJsonUnion | null>;
}
