import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_json_validateStringify_ObjectUnionExplicit =
  _test_json_validateStringify("ObjectUnionExplicit")<ObjectUnionExplicit>(
    ObjectUnionExplicit,
  )((input) => typia.json.validateStringify<ObjectUnionExplicit>(input));
