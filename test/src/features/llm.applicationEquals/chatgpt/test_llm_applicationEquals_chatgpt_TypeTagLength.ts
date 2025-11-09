import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_llm_applicationEquals_chatgpt_TypeTagLength = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "TypeTagLength",
    factory: TypeTagLength,
  })(
    typia.llm.application<
      TypeTagLengthApplication,
      "chatgpt",
      { equals: true }
    >(),
  );

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
