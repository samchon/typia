import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_assertEquals_FunctionalTupleUnion = _test_assertEquals(
  "FunctionalTupleUnion",
)<FunctionalTupleUnion>(FunctionalTupleUnion)((input) =>
  typia.assertEquals<FunctionalTupleUnion>(input),
);
