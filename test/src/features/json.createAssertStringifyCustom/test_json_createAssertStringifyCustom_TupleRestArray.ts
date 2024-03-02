import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_json_createAssertStringifyCustom_TupleRestArray =
  _test_json_assertStringify(CustomGuardError)(
    "TupleRestArray",
  )<TupleRestArray>(TupleRestArray)(
    typia.json.createAssertStringify<TupleRestArray>(
      (p) => new CustomGuardError(p),
    ),
  );
