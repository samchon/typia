import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_json_assertParseCustom_ConstantAtomicUnion =
  _test_json_assertParse(CustomGuardError)(
    "ConstantAtomicUnion",
  )<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
    typia.json.assertParse<ConstantAtomicUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
