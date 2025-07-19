import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_llm_application_chatgpt_ToJsonAtomicUnion =
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "ToJsonAtomicUnion",
    factory: ToJsonAtomicUnion,
  })(
    typia.llm.application<
      ToJsonAtomicUnionApplication,
      "chatgpt",
      { equal: true }
    >(),
  );

interface ToJsonAtomicUnionApplication {
  insert(p: { first: ToJsonAtomicUnion }): Promise<void>;
  reduce(p: {
    first: ToJsonAtomicUnion;
    second: ToJsonAtomicUnion | null;
  }): Promise<ToJsonAtomicUnion>;
  coalesce(p: {
    first: ToJsonAtomicUnion | null;
    second: ToJsonAtomicUnion | null;
    third?: ToJsonAtomicUnion | null;
  }): Promise<ToJsonAtomicUnion | null>;
}
