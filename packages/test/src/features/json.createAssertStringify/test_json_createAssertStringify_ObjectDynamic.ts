import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_json_createAssertStringify_ObjectDynamic =
  _test_json_assertStringify("ObjectDynamic")<ObjectDynamic>(ObjectDynamic)(
    typia.json.createAssertStringify<ObjectDynamic>(),
  );
