import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ObjectTuple =
  _test_json_assertStringify(CustomGuardError)("ObjectTuple")<ObjectTuple>(
    ObjectTuple,
  )(
    typia.json.createAssertStringify<ObjectTuple>(
      (p) => new CustomGuardError(p),
    ),
  );
