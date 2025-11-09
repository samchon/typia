import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_createEquals_ClassGetter = (): void =>
  _test_equals("ClassGetter")<ClassGetter>(ClassGetter)(
    typia.createEquals<ClassGetter>(),
  );
