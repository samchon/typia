import typia from "typia";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_0_ObjectUndefined = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "ObjectUndefined",
  })(
    typia.llm.parameters<ObjectUndefinedParameters, "3.0">(),
  );

interface ObjectUndefinedParameters {
  regular: ObjectUndefined;
  nullable: ObjectUndefined | null;
  optional: ObjectUndefined | undefined;
  faint: ObjectUndefined | null | undefined;
  array: Array<ObjectUndefined>;
}