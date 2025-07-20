import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createValidateEquals_ObjectUnionExplicit = (): void =>
  _test_validateEquals("ObjectUnionExplicit")<ObjectUnionExplicit>(
    ObjectUnionExplicit,
  )(typia.createValidateEquals<ObjectUnionExplicit>());
