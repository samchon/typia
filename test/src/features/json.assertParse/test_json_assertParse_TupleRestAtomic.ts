import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

import { TypeGuardError } from "typia";

export const test_json_assertParse_TupleRestAtomic = _test_json_assertParse(
  TypeGuardError,
)("TupleRestAtomic")<TupleRestAtomic>(TupleRestAtomic)((input) =>
  typia.json.assertParse<TupleRestAtomic>(input),
);
