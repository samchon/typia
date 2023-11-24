import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_json_createAssertStringify_ClassGetter =
  _test_json_assertStringify("ClassGetter")<ClassGetter>(ClassGetter)(
    typia.json.createAssertStringify<ClassGetter>(),
  );
