import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_json_createAssertParseCustom_ObjectUnionDouble =
  _test_json_assertParse(CustomGuardError)(
    "ObjectUnionDouble",
  )<ObjectUnionDouble>(ObjectUnionDouble)(
    typia.json.createAssertParse<ObjectUnionDouble>(
      (p) => new CustomGuardError(p),
    ),
  );
