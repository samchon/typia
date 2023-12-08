import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_json_validateStringify_ObjectRequired =
  _test_json_validateStringify("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )((input) => typia.json.validateStringify<ObjectRequired>(input));
