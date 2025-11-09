import typia from "typia";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_1_TypeTagFormat = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "TypeTagFormat",
  })(
    typia.llm.parameters<TypeTagFormatParameters, "3.1">(),
  );

interface TypeTagFormatParameters {
  regular: TypeTagFormat;
  nullable: TypeTagFormat | null;
  optional: TypeTagFormat | undefined;
  faint: TypeTagFormat | null | undefined;
  array: Array<TypeTagFormat>;
}