import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_json_createAssertStringifyCustom_ObjectDate =
  _test_json_assertStringify(CustomGuardError)("ObjectDate")<ObjectDate>(
    ObjectDate,
  )(
    typia.json.createAssertStringify<ObjectDate>(
      (p) => new CustomGuardError(p),
    ),
  );
