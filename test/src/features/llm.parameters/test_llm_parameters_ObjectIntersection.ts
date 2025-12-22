import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_llm_parameters_ObjectIntersection = (): void =>
  _test_llm_parameters("ObjectIntersection")(
    typia.llm.parameters<ObjectIntersectionParameters>(),
  );

interface ObjectIntersectionParameters {
  regular: ObjectIntersection;
  nullable: ObjectIntersection | null;
  optional: ObjectIntersection | undefined;
  faint: ObjectIntersection | null | undefined;
  array: Array<ObjectIntersection>;
}
