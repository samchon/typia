import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ObjectJsonTag = _test_json_assertParse(
  CustomGuardError,
)("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)((input) =>
  typia.json.assertParse<ObjectJsonTag>(input, (p) => new CustomGuardError(p)),
);
