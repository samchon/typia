import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_json_createAssertStringify_ObjectSimple =
  _test_json_assertStringify("ObjectSimple")<ObjectSimple>(ObjectSimple)(
    typia.json.createAssertStringify<ObjectSimple>(),
  );
