import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_llm_parameters_3_1_ObjectIntersection = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "ObjectIntersection",
  })(typia.llm.parameters<ObjectIntersectionParameters, "3.1">());

interface ObjectIntersectionParameters {
  regular: ObjectIntersection;
  nullable: ObjectIntersection | null;
  optional: ObjectIntersection | undefined;
  faint: ObjectIntersection | null | undefined;
  array: Array<ObjectIntersection>;
}
