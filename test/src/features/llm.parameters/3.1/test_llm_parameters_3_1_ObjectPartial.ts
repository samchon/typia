import typia from "typia";
import { ObjectPartial } from "../../../structures/ObjectPartial";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_1_ObjectPartial = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "ObjectPartial",
  })(
    typia.llm.parameters<ObjectPartialParameters, "3.1">(),
  );

interface ObjectPartialParameters {
  regular: ObjectPartial;
  nullable: ObjectPartial | null;
  optional: ObjectPartial | undefined;
  faint: ObjectPartial | null | undefined;
  array: Array<ObjectPartial>;
}