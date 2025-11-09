import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_json_createIsParse_ObjectUnionExplicit = (): void =>
  _test_json_isParse("ObjectUnionExplicit")<ObjectUnionExplicit>(
    ObjectUnionExplicit,
  )(typia.json.createIsParse<ObjectUnionExplicit>());
