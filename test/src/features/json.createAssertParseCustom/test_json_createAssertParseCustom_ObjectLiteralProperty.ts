import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_json_createAssertParseCustom_ObjectLiteralProperty =
  (): void =>
    _test_json_assertParse(CustomGuardError)(
      "ObjectLiteralProperty",
    )<ObjectLiteralProperty>(ObjectLiteralProperty)(
      typia.json.createAssertParse<ObjectLiteralProperty>(
        (p) => new CustomGuardError(p),
      ),
    );
