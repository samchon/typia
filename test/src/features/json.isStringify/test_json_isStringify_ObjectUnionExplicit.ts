import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_json_isStringify_ObjectUnionExplicit = (): void =>
  _test_json_isStringify("ObjectUnionExplicit")<ObjectUnionExplicit>(
    ObjectUnionExplicit,
  )((input) => typia.json.isStringify<ObjectUnionExplicit>(input));
