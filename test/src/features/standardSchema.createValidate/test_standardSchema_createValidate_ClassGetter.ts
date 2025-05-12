import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_standardSchema_createValidate_ClassGetter =
  _test_standardSchema_validate("ClassGetter")<ClassGetter>(ClassGetter)(
    typia.createValidate<ClassGetter>(),
  );
