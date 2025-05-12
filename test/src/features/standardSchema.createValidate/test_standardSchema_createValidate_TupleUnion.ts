import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_standardSchema_createValidate_TupleUnion =
  _test_standardSchema_validate("TupleUnion")<TupleUnion>(TupleUnion)(
    typia.createValidate<TupleUnion>(),
  );
