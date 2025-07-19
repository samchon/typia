import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_llm_application_3_1_TypeTagLength =
  _test_llm_applicationEquals({
    model: "3.1",
    name: "TypeTagLength",
    factory: TypeTagLength,
  })(typia.llm.application<TypeTagLengthApplication, "3.1", { equal: true }>());

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
