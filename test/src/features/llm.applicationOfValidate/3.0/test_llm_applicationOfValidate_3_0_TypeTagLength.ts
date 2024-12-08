import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_llm_applicationOfValidate_3_0_TypeTagLength =
  _test_llm_applicationOfValidate({
    model: "3.0",
    name: "TypeTagLength",
    factory: TypeTagLength,
  })(typia.llm.applicationOfValidate<TypeTagLengthApplication, "3.0">());

interface TypeTagLengthApplication {
  insert(p: { first: TypeTagLength }): Promise<void>;
  reduce(p: {
    first: TypeTagLength;
    second: TypeTagLength | null;
  }): Promise<TypeTagLength>;
  coalesce(p: {
    first: TypeTagLength | null;
    second: TypeTagLength | null;
    third?: TypeTagLength | null;
  }): Promise<TypeTagLength | null>;
}
