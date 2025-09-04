import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_standardSchema_createValidate_ObjectSimple = (): void =>
  _test_standardSchema_validate("ObjectSimple")<ObjectSimple>(ObjectSimple)(
    typia.createValidate<ObjectSimple>(),
  );
