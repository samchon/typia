import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_json_createAssertStringify_TypeTagArray =
  _test_json_assertStringify("TypeTagArray")<TypeTagArray>(TypeTagArray)(
    typia.json.createAssertStringify<TypeTagArray>(),
  );
