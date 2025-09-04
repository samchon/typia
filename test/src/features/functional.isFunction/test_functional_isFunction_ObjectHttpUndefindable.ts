import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_isFunction_ObjectHttpUndefindable = (): void =>
  _test_functional_isFunction("ObjectHttpUndefindable")(ObjectHttpUndefindable)(
    (p: (input: ObjectHttpUndefindable) => ObjectHttpUndefindable) =>
      typia.functional.isFunction(p),
  );
