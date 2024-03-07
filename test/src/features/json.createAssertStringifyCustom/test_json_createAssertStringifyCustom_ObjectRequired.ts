import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ObjectRequired =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectRequired",
  )<ObjectRequired>(ObjectRequired)(
    typia.json.createAssertStringify<ObjectRequired>(
      (p) => new CustomGuardError(p),
    ),
  );
