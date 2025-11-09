import typia from "typia";
import { DynamicTree } from "../../../structures/DynamicTree";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_1_DynamicTree = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "DynamicTree",
  })(
    typia.llm.parameters<DynamicTreeParameters, "3.1">(),
  );

interface DynamicTreeParameters {
  regular: DynamicTree;
  nullable: DynamicTree | null;
  optional: DynamicTree | undefined;
  faint: DynamicTree | null | undefined;
  array: Array<DynamicTree>;
}