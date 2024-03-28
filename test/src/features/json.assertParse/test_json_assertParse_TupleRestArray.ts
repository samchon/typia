import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_json_assertParse_TupleRestArray = _test_json_assertParse(
  TypeGuardError,
)("TupleRestArray")<TupleRestArray>(TupleRestArray)((input) =>
  typia.json.assertParse<TupleRestArray>(input),
);
