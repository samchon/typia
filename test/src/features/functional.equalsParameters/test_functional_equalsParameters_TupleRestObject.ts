import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_equalsParameters_TupleRestObject = _test_functional_equalsParameters(
  "TupleRestObject"
)(TupleRestObject)(
  (p: (input: TupleRestObject) => TupleRestObject) => typia.functional.equalsParameters(p),
)