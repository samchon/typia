import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_json_assertStringifyCustom_ObjectLiteralType =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectLiteralType",
  )<ObjectLiteralType>(ObjectLiteralType)((input) =>
    typia.json.assertStringify<ObjectLiteralType>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
