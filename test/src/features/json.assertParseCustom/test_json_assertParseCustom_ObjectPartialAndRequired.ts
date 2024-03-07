import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ObjectPartialAndRequired =
  _test_json_assertParse(CustomGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)((input) =>
    typia.json.assertParse<ObjectPartialAndRequired>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
