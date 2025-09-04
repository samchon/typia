import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_standardSchema_createValidate_TupleRestArray = (): void =>
  _test_standardSchema_validate("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )(typia.createValidate<TupleRestArray>());
