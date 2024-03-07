import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ArrayUnion =
  _test_json_assertStringify(CustomGuardError)("ArrayUnion")<ArrayUnion>(
    ArrayUnion,
  )(
    typia.json.createAssertStringify<ArrayUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
