import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_json_assertStringify_ObjectInternal =
  _test_json_assertStringify("ObjectInternal")<ObjectInternal>(ObjectInternal)(
    (input) => typia.json.assertStringify<ObjectInternal>(input),
  );
