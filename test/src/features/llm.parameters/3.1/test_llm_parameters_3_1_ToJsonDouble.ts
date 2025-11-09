import typia from "typia";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_1_ToJsonDouble = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "ToJsonDouble",
  })(
    typia.llm.parameters<ToJsonDoubleParameters, "3.1">(),
  );

interface ToJsonDoubleParameters {
  regular: ToJsonDouble;
  nullable: ToJsonDouble | null;
  optional: ToJsonDouble | undefined;
  faint: ToJsonDouble | null | undefined;
  array: Array<ToJsonDouble>;
}