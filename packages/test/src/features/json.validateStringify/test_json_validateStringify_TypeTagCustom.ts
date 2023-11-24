import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_json_validateStringify_TypeTagCustom =
  _test_json_validateStringify("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)(
    (input) => typia.json.validateStringify<TypeTagCustom>(input),
  );
