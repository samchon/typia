import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ArrayAtomicSimple =
  _test_json_assertStringify(CustomGuardError)(
    "ArrayAtomicSimple",
  )<ArrayAtomicSimple>(ArrayAtomicSimple)(
    typia.json.createAssertStringify<ArrayAtomicSimple>(
      (p) => new CustomGuardError(p),
    ),
  );
