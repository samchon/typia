import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_json_createAssertStringify_ArraySimple =
  _test_json_assertStringify("ArraySimple")<ArraySimple>(ArraySimple)(
    typia.json.createAssertStringify<ArraySimple>(),
  );
