import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { UltimateUnion } from "../../structures/UltimateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_UltimateUnion =
  _test_json_assertParse(CustomGuardError)("UltimateUnion")<UltimateUnion>(
    UltimateUnion,
  )(
    typia.json.createAssertParse<UltimateUnion>((p) => new CustomGuardError(p)),
  );
