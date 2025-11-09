import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createValidateEquals_TupleHierarchical = (): void =>
  _test_validateEquals("TupleHierarchical")<TupleHierarchical>(
    TupleHierarchical,
  )(typia.createValidateEquals<TupleHierarchical>());
