import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_json_createAssertParse_ObjectJsonTag = (): void =>
  _test_json_assertParse(TypeGuardError)("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
  )(typia.json.createAssertParse<ObjectJsonTag>());
