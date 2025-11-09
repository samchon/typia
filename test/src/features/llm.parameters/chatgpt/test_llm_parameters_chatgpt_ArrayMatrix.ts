import typia from "typia";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_chatgpt_ArrayMatrix = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "ArrayMatrix",
  })(
    typia.llm.parameters<ArrayMatrixParameters, "chatgpt">(),
  );

interface ArrayMatrixParameters {
  regular: ArrayMatrix;
  nullable: ArrayMatrix | null;
  optional: ArrayMatrix | undefined;
  faint: ArrayMatrix | null | undefined;
  array: Array<ArrayMatrix>;
}