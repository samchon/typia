import typia from "typia";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_1_ObjectGenericUnion = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "ObjectGenericUnion",
  })(
    typia.llm.parameters<ObjectGenericUnionParameters, "3.1">(),
  );

interface ObjectGenericUnionParameters {
  regular: ObjectGenericUnion;
  nullable: ObjectGenericUnion | null;
  optional: ObjectGenericUnion | undefined;
  faint: ObjectGenericUnion | null | undefined;
  array: Array<ObjectGenericUnion>;
}