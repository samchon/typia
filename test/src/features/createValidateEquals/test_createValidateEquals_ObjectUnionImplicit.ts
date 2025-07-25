import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_createValidateEquals_ObjectUnionImplicit = (): void =>
  _test_validateEquals("ObjectUnionImplicit")<ObjectUnionImplicit>(
    ObjectUnionImplicit,
  )(typia.createValidateEquals<ObjectUnionImplicit>());
