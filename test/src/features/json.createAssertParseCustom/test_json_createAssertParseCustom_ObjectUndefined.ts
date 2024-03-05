import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_json_createAssertParseCustom_ObjectUndefined =
  _test_json_assertParse(CustomGuardError)("ObjectUndefined")<ObjectUndefined>(
    ObjectUndefined,
  )(
    typia.json.createAssertParse<ObjectUndefined>(
      (p) => new CustomGuardError(p),
    ),
  );
