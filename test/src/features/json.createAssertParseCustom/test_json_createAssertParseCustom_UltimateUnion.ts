import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_json_createAssertParseCustom_UltimateUnion = (): void =>
  _test_json_assertParse(CustomGuardError)("UltimateUnion")<UltimateUnion>(
    UltimateUnion,
  )(
    typia.json.createAssertParse<UltimateUnion>((p) => new CustomGuardError(p)),
  );
