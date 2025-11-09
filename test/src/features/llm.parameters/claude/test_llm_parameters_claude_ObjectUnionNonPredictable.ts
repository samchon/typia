import typia from "typia";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_claude_ObjectUnionNonPredictable = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "ObjectUnionNonPredictable",
  })(
    typia.llm.parameters<ObjectUnionNonPredictableParameters, "claude">(),
  );

interface ObjectUnionNonPredictableParameters {
  regular: ObjectUnionNonPredictable;
  nullable: ObjectUnionNonPredictable | null;
  optional: ObjectUnionNonPredictable | undefined;
  faint: ObjectUnionNonPredictable | null | undefined;
  array: Array<ObjectUnionNonPredictable>;
}