import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ObjectJsonTag =
  _test_json_assertStringify(CustomGuardError)("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
  )(
    typia.json.createAssertStringify<ObjectJsonTag>(
      (p) => new CustomGuardError(p),
    ),
  );
