import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_json_assertStringify_TypeTagPattern =
  _test_json_assertStringify("TypeTagPattern")<TypeTagPattern>(TypeTagPattern)(
    (input) => typia.json.assertStringify<TypeTagPattern>(input),
  );
