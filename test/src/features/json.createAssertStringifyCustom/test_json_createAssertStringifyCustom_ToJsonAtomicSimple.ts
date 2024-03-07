import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ToJsonAtomicSimple =
  _test_json_assertStringify(CustomGuardError)(
    "ToJsonAtomicSimple",
  )<ToJsonAtomicSimple>(ToJsonAtomicSimple)(
    typia.json.createAssertStringify<ToJsonAtomicSimple>(
      (p) => new CustomGuardError(p),
    ),
  );
