import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_json_createAssertParseCustom_ObjectRecursive =
  _test_json_assertParse(CustomGuardError)("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )(
    typia.json.createAssertParse<ObjectRecursive>(
      (p) => new CustomGuardError(p),
    ),
  );
