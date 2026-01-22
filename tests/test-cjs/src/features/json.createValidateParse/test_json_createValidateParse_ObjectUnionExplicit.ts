import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_json_createValidateParse_ObjectUnionExplicit = (): void =>
  _test_json_validateParse("ObjectUnionExplicit")<ObjectUnionExplicit>(
    ObjectUnionExplicit,
  )(typia.json.createValidateParse<ObjectUnionExplicit>());
