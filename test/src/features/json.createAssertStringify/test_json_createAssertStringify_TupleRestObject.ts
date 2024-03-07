import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleRestObject } from "../../structures/TupleRestObject";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_TupleRestObject =
  _test_json_assertStringify(TypeGuardError)(
    "TupleRestObject",
  )<TupleRestObject>(TupleRestObject)(
    typia.json.createAssertStringify<TupleRestObject>(),
  );
