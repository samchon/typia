import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_createValidate_ClassMethod = (): void =>
  _test_validate("ClassMethod")<ClassMethod>(ClassMethod)(
    typia.createValidate<ClassMethod>(),
  );
