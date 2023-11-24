import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_json_createAssertStringify_UltimateUnion =
  _test_json_assertStringify("UltimateUnion")<UltimateUnion>(UltimateUnion)(
    typia.json.createAssertStringify<UltimateUnion>(),
  );
