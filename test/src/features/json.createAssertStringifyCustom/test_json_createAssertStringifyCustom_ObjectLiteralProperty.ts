import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_json_createAssertStringifyCustom_ObjectLiteralProperty =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "ObjectLiteralProperty",
    )<ObjectLiteralProperty>(ObjectLiteralProperty)(
      typia.json.createAssertStringify<ObjectLiteralProperty>(
        (p) => new CustomGuardError(p),
      ),
    );
