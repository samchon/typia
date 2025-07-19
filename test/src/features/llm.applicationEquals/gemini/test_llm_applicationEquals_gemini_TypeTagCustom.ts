import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_llm_application_gemini_TypeTagCustom =
  _test_llm_applicationEquals({
    model: "gemini",
    name: "TypeTagCustom",
    factory: TypeTagCustom,
  })(
    typia.llm.application<
      TypeTagCustomApplication,
      "gemini",
      { equal: true }
    >(),
  );

interface TypeTagCustomApplication {
  insert(p: { first: TypeTagCustom }): Promise<void>;
  reduce(p: {
    first: TypeTagCustom;
    second: TypeTagCustom | null;
  }): Promise<TypeTagCustom>;
  coalesce(p: {
    first: TypeTagCustom | null;
    second: TypeTagCustom | null;
    third?: TypeTagCustom | null;
  }): Promise<TypeTagCustom | null>;
}
