import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_json_assertStringify_TypeTagFormat =
  _test_json_assertStringify("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)(
    (input) => typia.json.assertStringify<TypeTagFormat>(input),
  );
