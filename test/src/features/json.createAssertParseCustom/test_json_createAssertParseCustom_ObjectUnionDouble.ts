import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ObjectUnionDouble =
  _test_json_assertParse(CustomGuardError)(
    "ObjectUnionDouble",
  )<ObjectUnionDouble>(ObjectUnionDouble)(
    typia.json.createAssertParse<ObjectUnionDouble>(
      (p) => new CustomGuardError(p),
    ),
  );
