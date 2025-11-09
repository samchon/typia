import typia from "typia";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_chatgpt_ConstantAtomicTagged = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "ConstantAtomicTagged",
    factory: ConstantAtomicTagged
  })(
    typia.llm.application<ConstantAtomicTaggedApplication, "chatgpt", { equals: true }>(),
  );

interface ConstantAtomicTaggedApplication {
  insert(p: { first: ConstantAtomicTagged }): Promise<void>;
  reduce(p: { first: ConstantAtomicTagged, second: ConstantAtomicTagged | null }): Promise<ConstantAtomicTagged>;
  coalesce(p: {
    first: ConstantAtomicTagged | null,
    second: ConstantAtomicTagged | null,
    third?: ConstantAtomicTagged | null,
  }): Promise<ConstantAtomicTagged | null>;
}