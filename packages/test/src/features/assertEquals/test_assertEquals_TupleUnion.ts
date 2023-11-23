import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_assertEquals_TupleUnion = _test_assertEquals(
  "TupleUnion",
)<TupleUnion>(TupleUnion)((input) => typia.assertEquals<TupleUnion>(input));
