import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ObjectJsonTag = (): void => _test_json_assertParse(CustomGuardError)(
    "ObjectJsonTag",
)<ObjectJsonTag>(
    ObjectJsonTag
)(typia.json.createAssertParse<ObjectJsonTag>((p) => new CustomGuardError(p)));
