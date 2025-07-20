import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_llm_applicationEquals_3_0_TypeTagLength = (): void =>
  _test_llm_applicationEquals({
    model: "3.0",
    name: "TypeTagLength",
    factory: TypeTagLength,
  })(typia.llm.application<TypeTagLengthApplication, "3.0", { equals:; true }>());

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
