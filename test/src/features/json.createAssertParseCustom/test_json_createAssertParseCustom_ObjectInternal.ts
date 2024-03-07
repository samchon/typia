import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectInternal } from "../../structures/ObjectInternal";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ObjectInternal =
  _test_json_assertParse(CustomGuardError)("ObjectInternal")<ObjectInternal>(
    ObjectInternal,
  )(
    typia.json.createAssertParse<ObjectInternal>(
      (p) => new CustomGuardError(p),
    ),
  );
