import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleRestObject } from "../../structures/TupleRestObject";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_TupleRestObject =
  _test_json_assertParse(TypeGuardError)("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )(typia.json.createAssertParse<TupleRestObject>());
