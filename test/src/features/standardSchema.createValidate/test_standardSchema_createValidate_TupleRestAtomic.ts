import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_standardSchema_createValidate_TupleRestAtomic =
  _test_standardSchema_validate("TupleRestAtomic")<TupleRestAtomic>(
    TupleRestAtomic,
  )(typia.createValidate<TupleRestAtomic>());
