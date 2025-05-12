import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_standardSchema_createValidate_ObjectPartial =
  _test_standardSchema_validate("ObjectPartial")<ObjectPartial>(ObjectPartial)(
    typia.createValidate<ObjectPartial>(),
  );
