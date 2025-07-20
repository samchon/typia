import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_json_createAssertStringifyCustom_ObjectRequired = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "ObjectRequired",
  )<ObjectRequired>(ObjectRequired)(
    typia.json.createAssertStringify<ObjectRequired>(
      (p) => new CustomGuardError(p),
    ),
  );
