import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_json_createAssertStringifyCustom_ObjectTuple = (): void =>
  _test_json_assertStringify(CustomGuardError)("ObjectTuple")<ObjectTuple>(
    ObjectTuple,
  )(
    typia.json.createAssertStringify<ObjectTuple>(
      (p) => new CustomGuardError(p),
    ),
  );
