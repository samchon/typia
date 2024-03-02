import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_json_createAssertParseCustom_ObjectJsonTag =
  _test_json_assertParse(CustomGuardError)("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
  )(
    typia.json.createAssertParse<ObjectJsonTag>((p) => new CustomGuardError(p)),
  );
