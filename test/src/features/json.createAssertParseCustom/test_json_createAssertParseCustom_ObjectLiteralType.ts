import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_json_createAssertParseCustom_ObjectLiteralType = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "ObjectLiteralType",
  )<ObjectLiteralType>(ObjectLiteralType)(
    typia.json.createAssertParse<ObjectLiteralType>(
      (p) => new CustomGuardError(p),
    ),
  );
