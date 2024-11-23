import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_llm_parameters_3_0_ObjectIntersection = _test_llm_parameters({
  model: "3.0",
  name: "ObjectIntersection",
})(typia.llm.parameters<ObjectIntersectionParameters, "3.0">());

interface ObjectIntersectionParameters {
  regular: ObjectIntersection;
  nullable: ObjectIntersection | null;
  optional: ObjectIntersection | undefined;
  faint: ObjectIntersection | null | undefined;
  array: Array<ObjectIntersection>;
}
