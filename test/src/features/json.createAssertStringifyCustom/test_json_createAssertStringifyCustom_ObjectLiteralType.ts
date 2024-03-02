import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_json_createAssertStringifyCustom_ObjectLiteralType =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectLiteralType",
  )<ObjectLiteralType>(ObjectLiteralType)(
    typia.json.createAssertStringify<ObjectLiteralType>(
      (p) => new CustomGuardError(p),
    ),
  );
