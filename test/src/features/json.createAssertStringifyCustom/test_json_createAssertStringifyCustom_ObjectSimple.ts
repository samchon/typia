import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectSimple } from "../../structures/ObjectSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ObjectSimple =
  _test_json_assertStringify(CustomGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )(
    typia.json.createAssertStringify<ObjectSimple>(
      (p) => new CustomGuardError(p),
    ),
  );
