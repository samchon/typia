import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_json_assertParseCustom_ObjectLiteralProperty = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)((input) =>
    typia.json.assertParse<ObjectLiteralProperty>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
