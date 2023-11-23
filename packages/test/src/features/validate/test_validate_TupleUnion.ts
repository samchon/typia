import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_validate_TupleUnion = _test_validate(
  "TupleUnion",
)<TupleUnion>(TupleUnion)((input) => typia.validate<TupleUnion>(input));
