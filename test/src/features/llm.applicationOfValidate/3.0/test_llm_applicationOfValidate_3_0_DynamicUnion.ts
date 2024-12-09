import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_llm_applicationOfValidate_3_0_DynamicUnion =
  _test_llm_applicationOfValidate({
    model: "3.0",
    name: "DynamicUnion",
    factory: DynamicUnion,
  })(typia.llm.applicationOfValidate<DynamicUnionApplication, "3.0">());

interface DynamicUnionApplication {
  insert(p: { first: DynamicUnion }): Promise<void>;
  reduce(p: {
    first: DynamicUnion;
    second: DynamicUnion | null;
  }): Promise<DynamicUnion>;
  coalesce(p: {
    first: DynamicUnion | null;
    second: DynamicUnion | null;
    third?: DynamicUnion | null;
  }): Promise<DynamicUnion | null>;
}
