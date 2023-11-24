import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_json_createAssertStringify_ObjectOptional =
  _test_json_assertStringify("ObjectOptional")<ObjectOptional>(ObjectOptional)(
    typia.json.createAssertStringify<ObjectOptional>(),
  );
