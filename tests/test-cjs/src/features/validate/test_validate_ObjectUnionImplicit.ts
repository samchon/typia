import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_validate_ObjectUnionImplicit = (): void =>
  _test_validate("ObjectUnionImplicit")<ObjectUnionImplicit>(
    ObjectUnionImplicit,
  )((input) => typia.validate<ObjectUnionImplicit>(input));
