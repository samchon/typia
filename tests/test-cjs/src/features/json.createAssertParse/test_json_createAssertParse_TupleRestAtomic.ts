import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_json_createAssertParse_TupleRestAtomic = (): void =>
  _test_json_assertParse(TypeGuardError)("TupleRestAtomic")<TupleRestAtomic>(
    TupleRestAtomic,
  )(typia.json.createAssertParse<TupleRestAtomic>());
