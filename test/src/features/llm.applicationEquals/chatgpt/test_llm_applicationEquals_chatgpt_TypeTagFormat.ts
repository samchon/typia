import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_llm_applicationEquals_chatgpt_TypeTagFormat = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "TypeTagFormat",
    factory: TypeTagFormat,
  })(
    typia.llm.application<
      TypeTagFormatApplication,
      "chatgpt",
      { equals: true }
    >(),
  );

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
