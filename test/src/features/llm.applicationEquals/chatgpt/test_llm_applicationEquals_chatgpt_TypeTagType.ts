import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { TypeTagType } from "../../../structures/TypeTagType";

export const test_llm_applicationEquals_chatgpt_TypeTagType = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "TypeTagType",
    factory: TypeTagType,
  })(
    typia.llm.application<TypeTagTypeApplication, "chatgpt", { equal: true }>(),
  );

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
