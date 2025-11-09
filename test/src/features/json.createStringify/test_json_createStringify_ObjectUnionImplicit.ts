import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_json_createStringify_ObjectUnionImplicit = (): void =>
  _test_json_stringify("ObjectUnionImplicit")<ObjectUnionImplicit>(
    ObjectUnionImplicit,
  )(typia.json.createStringify<ObjectUnionImplicit>());
