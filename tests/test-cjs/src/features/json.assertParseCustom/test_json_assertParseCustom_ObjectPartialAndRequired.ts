import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_json_assertParseCustom_ObjectPartialAndRequired = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)((input) =>
    typia.json.assertParse<ObjectPartialAndRequired>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
