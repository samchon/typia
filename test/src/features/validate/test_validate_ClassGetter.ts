import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_validate_ClassGetter = (): void =>
  _test_validate("ClassGetter")<ClassGetter>(ClassGetter)((input) =>
    typia.validate<ClassGetter>(input),
  );
