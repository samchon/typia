import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleRestArray } from "../../structures/TupleRestArray";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_TupleRestArray =
  _test_json_assertParse(TypeGuardError)("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )(typia.json.createAssertParse<TupleRestArray>());
