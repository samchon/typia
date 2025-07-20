import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_standardSchema_createValidate_ClassMethod = (): void =>
  _test_standardSchema_validate("ClassMethod")<ClassMethod>(ClassMethod)(
    typia.createValidate<ClassMethod>(),
  );
