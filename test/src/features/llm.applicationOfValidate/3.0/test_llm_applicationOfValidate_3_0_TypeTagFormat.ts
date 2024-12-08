import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_llm_applicationOfValidate_3_0_TypeTagFormat =
  _test_llm_applicationOfValidate({
    model: "3.0",
    name: "TypeTagFormat",
    factory: TypeTagFormat,
  })(typia.llm.applicationOfValidate<TypeTagFormatApplication, "3.0">());

interface TypeTagFormatApplication {
  insert(p: { first: TypeTagFormat }): Promise<void>;
  reduce(p: {
    first: TypeTagFormat;
    second: TypeTagFormat | null;
  }): Promise<TypeTagFormat>;
  coalesce(p: {
    first: TypeTagFormat | null;
    second: TypeTagFormat | null;
    third?: TypeTagFormat | null;
  }): Promise<TypeTagFormat | null>;
}
