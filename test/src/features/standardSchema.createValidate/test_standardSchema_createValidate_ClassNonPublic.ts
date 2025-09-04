import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_standardSchema_createValidate_ClassNonPublic = (): void =>
  _test_standardSchema_validate("ClassNonPublic")<ClassNonPublic>(
    ClassNonPublic,
  )(typia.createValidate<ClassNonPublic>());
