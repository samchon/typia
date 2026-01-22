import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createValidate_TupleRestArray = (): void =>
  _test_validate("TupleRestArray")<TupleRestArray>(TupleRestArray)(
    typia.createValidate<TupleRestArray>(),
  );
