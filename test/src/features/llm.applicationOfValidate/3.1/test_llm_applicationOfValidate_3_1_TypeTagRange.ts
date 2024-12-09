import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_llm_applicationOfValidate_3_1_TypeTagRange =
  _test_llm_applicationOfValidate({
    model: "3.1",
    name: "TypeTagRange",
    factory: TypeTagRange,
  })(typia.llm.applicationOfValidate<TypeTagRangeApplication, "3.1">());

interface TypeTagRangeApplication {
  insert(p: { first: TypeTagRange }): Promise<void>;
  reduce(p: {
    first: TypeTagRange;
    second: TypeTagRange | null;
  }): Promise<TypeTagRange>;
  coalesce(p: {
    first: TypeTagRange | null;
    second: TypeTagRange | null;
    third?: TypeTagRange | null;
  }): Promise<TypeTagRange | null>;
}
