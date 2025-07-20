import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_llm_applicationEquals_3_1_TypeTagCustom = (): void =>
  _test_llm_applicationEquals({
    model: "3.1",
    name: "TypeTagCustom",
    factory: TypeTagCustom,
  })(
    typia.llm.application<TypeTagCustomApplication, "3.1", { equals: true }>(),
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
