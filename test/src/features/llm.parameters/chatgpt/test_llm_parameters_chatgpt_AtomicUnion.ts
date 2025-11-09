import typia from "typia";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_chatgpt_AtomicUnion = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "AtomicUnion",
  })(
    typia.llm.parameters<AtomicUnionParameters, "chatgpt">(),
  );

interface AtomicUnionParameters {
  regular: AtomicUnion;
  nullable: AtomicUnion | null;
  optional: AtomicUnion | undefined;
  faint: AtomicUnion | null | undefined;
  array: Array<AtomicUnion>;
}