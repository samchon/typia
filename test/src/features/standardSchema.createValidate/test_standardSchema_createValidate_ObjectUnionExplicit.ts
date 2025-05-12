import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_standardSchema_createValidate_ObjectUnionExplicit =
  _test_standardSchema_validate("ObjectUnionExplicit")<ObjectUnionExplicit>(
    ObjectUnionExplicit,
  )(typia.createValidate<ObjectUnionExplicit>());
