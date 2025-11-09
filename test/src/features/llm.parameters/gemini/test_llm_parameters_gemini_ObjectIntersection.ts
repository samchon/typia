import typia from "typia";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_ObjectIntersection = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "ObjectIntersection",
  })(
    typia.llm.parameters<ObjectIntersectionParameters, "gemini">(),
  );

interface ObjectIntersectionParameters {
  regular: ObjectIntersection;
  nullable: ObjectIntersection | null;
  optional: ObjectIntersection | undefined;
  faint: ObjectIntersection | null | undefined;
  array: Array<ObjectIntersection>;
}