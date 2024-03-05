import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_json_createAssertParseCustom_ArrayAtomicSimple =
  _test_json_assertParse(CustomGuardError)(
    "ArrayAtomicSimple",
  )<ArrayAtomicSimple>(ArrayAtomicSimple)(
    typia.json.createAssertParse<ArrayAtomicSimple>(
      (p) => new CustomGuardError(p),
    ),
  );
