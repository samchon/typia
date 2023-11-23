import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_json_validateStringify_ObjectUnionDouble =
  _test_json_validateStringify("ObjectUnionDouble")<ObjectUnionDouble>(
    ObjectUnionDouble,
  )((input) => typia.json.validateStringify<ObjectUnionDouble>(input));
