import typia from "typia";
import { ObjectInternal } from "../../../structures/ObjectInternal";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_1_ObjectInternal = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "ObjectInternal",
  })(
    typia.llm.parameters<ObjectInternalParameters, "3.1">(),
  );

interface ObjectInternalParameters {
  regular: ObjectInternal;
  nullable: ObjectInternal | null;
  optional: ObjectInternal | undefined;
  faint: ObjectInternal | null | undefined;
  array: Array<ObjectInternal>;
}