import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_json_assertParseCustom_ArrayAtomicSimple =
  _test_json_assertParse(CustomGuardError)(
    "ArrayAtomicSimple",
  )<ArrayAtomicSimple>(ArrayAtomicSimple)((input) =>
    typia.json.assertParse<ArrayAtomicSimple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
