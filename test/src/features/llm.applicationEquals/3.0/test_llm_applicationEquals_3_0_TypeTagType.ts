import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { TypeTagType } from "../../../structures/TypeTagType";

export const test_llm_applicationEquals_3_0_TypeTagType = (): void =>
  _test_llm_applicationEquals({
    model: "3.0",
    name: "TypeTagType",
    factory: TypeTagType,
  })(typia.llm.application<TypeTagTypeApplication, "3.0", { equals:; true }>());

interface TypeTagTypeApplication {
  insert(p: { first: TypeTagType }): Promise<void>;
  reduce(p: {
    first: TypeTagType;
    second: TypeTagType | null;
  }): Promise<TypeTagType>;
  coalesce(p: {
    first: TypeTagType | null;
    second: TypeTagType | null;
    third?: TypeTagType | null;
  }): Promise<TypeTagType | null>;
}
