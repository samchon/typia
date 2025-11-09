import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_json_createAssertStringify_TupleRestObject = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "TupleRestObject",
  )<TupleRestObject>(TupleRestObject)(
    typia.json.createAssertStringify<TupleRestObject>(),
  );
