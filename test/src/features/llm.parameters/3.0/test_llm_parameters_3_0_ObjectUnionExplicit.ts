import typia from "typia";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_0_ObjectUnionExplicit = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "ObjectUnionExplicit",
  })(
    typia.llm.parameters<ObjectUnionExplicitParameters, "3.0">(),
  );

interface ObjectUnionExplicitParameters {
  regular: ObjectUnionExplicit;
  nullable: ObjectUnionExplicit | null;
  optional: ObjectUnionExplicit | undefined;
  faint: ObjectUnionExplicit | null | undefined;
  array: Array<ObjectUnionExplicit>;
}