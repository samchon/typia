import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_json_assertParseCustom_ObjectLiteralType =
  _test_json_assertParse(CustomGuardError)(
    "ObjectLiteralType",
  )<ObjectLiteralType>(ObjectLiteralType)((input) =>
    typia.json.assertParse<ObjectLiteralType>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
