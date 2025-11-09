import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_json_stringify_ObjectUnionImplicit = (): void =>
  _test_json_stringify("ObjectUnionImplicit")<ObjectUnionImplicit>(
    ObjectUnionImplicit,
  )((input) => typia.json.stringify<ObjectUnionImplicit>(input));
