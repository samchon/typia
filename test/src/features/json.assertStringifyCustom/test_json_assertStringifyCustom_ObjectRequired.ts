import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_json_assertStringifyCustom_ObjectRequired =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectRequired",
  )<ObjectRequired>(ObjectRequired)((input) =>
    typia.json.assertStringify<ObjectRequired>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
