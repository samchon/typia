import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_equalsFunction_ClassGetter = (): void =>
  _test_functional_equalsFunction("ClassGetter")(ClassGetter)(
    (p: (input: ClassGetter) => ClassGetter) =>
      typia.functional.equalsFunction(p),
  );
