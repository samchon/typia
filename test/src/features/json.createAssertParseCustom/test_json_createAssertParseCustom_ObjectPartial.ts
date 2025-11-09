import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_json_createAssertParseCustom_ObjectPartial = (): void =>
  _test_json_assertParse(CustomGuardError)("ObjectPartial")<ObjectPartial>(
    ObjectPartial,
  )(
    typia.json.createAssertParse<ObjectPartial>((p) => new CustomGuardError(p)),
  );
