import typia from "typia";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_0_ToJsonAtomicUnion = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "ToJsonAtomicUnion",
  })(
    typia.llm.parameters<ToJsonAtomicUnionParameters, "3.0">(),
  );

interface ToJsonAtomicUnionParameters {
  regular: ToJsonAtomicUnion;
  nullable: ToJsonAtomicUnion | null;
  optional: ToJsonAtomicUnion | undefined;
  faint: ToJsonAtomicUnion | null | undefined;
  array: Array<ToJsonAtomicUnion>;
}