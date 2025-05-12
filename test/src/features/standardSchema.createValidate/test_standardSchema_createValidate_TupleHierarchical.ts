import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_standardSchema_createValidate_TupleHierarchical =
  _test_standardSchema_validate("TupleHierarchical")<TupleHierarchical>(
    TupleHierarchical,
  )(typia.createValidate<TupleHierarchical>());
