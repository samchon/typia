import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleRestObject } from "../../structures/TupleRestObject";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_TupleRestObject =
  _test_json_assertStringify(CustomGuardError)(
    "TupleRestObject",
  )<TupleRestObject>(TupleRestObject)(
    typia.json.createAssertStringify<TupleRestObject>(
      (p) => new CustomGuardError(p),
    ),
  );
