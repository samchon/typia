import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_standardSchema_createValidate_ObjectUnionImplicit =
  (): void =>
    _test_standardSchema_validate("ObjectUnionImplicit")<ObjectUnionImplicit>(
      ObjectUnionImplicit,
    )(typia.createValidate<ObjectUnionImplicit>());
