import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_validate_ClassMethod = (): void =>
  _test_validate("ClassMethod")<ClassMethod>(ClassMethod)((input) =>
    typia.validate<ClassMethod>(input),
  );
