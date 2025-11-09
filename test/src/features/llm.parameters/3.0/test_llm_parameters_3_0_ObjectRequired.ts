import typia from "typia";
import { ObjectRequired } from "../../../structures/ObjectRequired";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_0_ObjectRequired = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "ObjectRequired",
  })(
    typia.llm.parameters<ObjectRequiredParameters, "3.0">(),
  );

interface ObjectRequiredParameters {
  regular: ObjectRequired;
  nullable: ObjectRequired | null;
  optional: ObjectRequired | undefined;
  faint: ObjectRequired | null | undefined;
  array: Array<ObjectRequired>;
}