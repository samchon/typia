import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_json_createAssertStringify_ObjectDate =
  _test_json_assertStringify("ObjectDate")<ObjectDate>(ObjectDate)(
    typia.json.createAssertStringify<ObjectDate>(),
  );
