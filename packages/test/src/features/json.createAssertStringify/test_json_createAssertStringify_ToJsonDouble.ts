import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_json_createAssertStringify_ToJsonDouble =
  _test_json_assertStringify("ToJsonDouble")<ToJsonDouble>(ToJsonDouble)(
    typia.json.createAssertStringify<ToJsonDouble>(),
  );
