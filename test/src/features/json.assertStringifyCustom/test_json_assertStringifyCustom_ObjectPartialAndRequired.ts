import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_json_assertStringifyCustom_ObjectPartialAndRequired =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)((input) =>
    typia.json.assertStringify<ObjectPartialAndRequired>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
