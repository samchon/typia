import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_validateParameters_TupleRestObject = (): void => _test_functional_validateParameters(
  "TupleRestObject"
)(TupleRestObject)(
  (p: (input: TupleRestObject) => TupleRestObject) => typia.functional.validateParameters(p),
)