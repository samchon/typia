import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_json_createAssertStringifyCustom_TupleRestObject =
  _test_json_assertStringify(CustomGuardError)(
    "TupleRestObject",
  )<TupleRestObject>(TupleRestObject)(
    typia.json.createAssertStringify<TupleRestObject>(
      (p) => new CustomGuardError(p),
    ),
  );
