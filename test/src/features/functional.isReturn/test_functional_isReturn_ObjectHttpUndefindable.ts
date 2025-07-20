import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_isReturn_ObjectHttpUndefindable = (): void =>
  _test_functional_isReturn("ObjectHttpUndefindable")(ObjectHttpUndefindable)(
    (p: (input: ObjectHttpUndefindable) => ObjectHttpUndefindable) =>
      typia.functional.isReturn(p),
  );
