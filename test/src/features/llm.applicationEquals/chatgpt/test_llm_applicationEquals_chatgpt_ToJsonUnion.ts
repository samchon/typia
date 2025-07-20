import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_llm_applicationEquals_chatgpt_ToJsonUnion = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "ToJsonUnion",
    factory: ToJsonUnion,
  })(
    typia.llm.application<ToJsonUnionApplication, "chatgpt", { equal: true }>(),
  );

interface ToJsonUnionApplication {
  insert(p: { first: ToJsonUnion }): Promise<void>;
  reduce(p: {
    first: ToJsonUnion;
    second: ToJsonUnion | null;
  }): Promise<ToJsonUnion>;
  coalesce(p: {
    first: ToJsonUnion | null;
    second: ToJsonUnion | null;
    third?: ToJsonUnion | null;
  }): Promise<ToJsonUnion | null>;
}
