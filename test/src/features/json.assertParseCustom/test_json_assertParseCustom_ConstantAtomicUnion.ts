import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ConstantAtomicUnion =
  _test_json_assertParse(CustomGuardError)(
    "ConstantAtomicUnion",
  )<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
    typia.json.assertParse<ConstantAtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
