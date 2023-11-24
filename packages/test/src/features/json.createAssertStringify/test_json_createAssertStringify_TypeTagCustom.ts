import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_json_createAssertStringify_TypeTagCustom =
  _test_json_assertStringify("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)(
    typia.json.createAssertStringify<TypeTagCustom>(),
  );
