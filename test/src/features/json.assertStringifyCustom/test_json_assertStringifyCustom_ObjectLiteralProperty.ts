import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ObjectLiteralProperty =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)((input) =>
    typia.json.assertStringify<ObjectLiteralProperty>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
