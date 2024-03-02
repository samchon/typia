import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_json_createAssertParseCustom_ObjectPartialAndRequired =
  _test_json_assertParse(CustomGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)(
    typia.json.createAssertParse<ObjectPartialAndRequired>(
      (p) => new CustomGuardError(p),
    ),
  );
