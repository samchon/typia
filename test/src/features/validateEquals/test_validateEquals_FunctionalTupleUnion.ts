import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_validateEquals_FunctionalTupleUnion = (): void =>
  _test_validateEquals("FunctionalTupleUnion")<FunctionalTupleUnion>(
    FunctionalTupleUnion,
  )((input) => typia.validateEquals<FunctionalTupleUnion>(input));
