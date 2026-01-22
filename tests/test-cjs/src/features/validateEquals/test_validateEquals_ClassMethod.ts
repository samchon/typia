import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_validateEquals_ClassMethod = (): void =>
  _test_validateEquals("ClassMethod")<ClassMethod>(ClassMethod)((input) =>
    typia.validateEquals<ClassMethod>(input),
  );
