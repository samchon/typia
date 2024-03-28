import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_json_assertParseCustom_ConstantIntersection =
  _test_json_assertParse(CustomGuardError)(
    "ConstantIntersection",
  )<ConstantIntersection>(ConstantIntersection)((input) =>
    typia.json.assertParse<ConstantIntersection>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
