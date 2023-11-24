import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_json_createAssertParse_TypeTagPattern =
  _test_json_assertParse("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)(
    typia.json.createAssertParse<TypeTagPattern>(),
  );
