import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_json_createAssertStringify_ObjectJsonTag =
  _test_json_assertStringify("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)(
    typia.json.createAssertStringify<ObjectJsonTag>(),
  );
