import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_validateReturn_ObjectHttpConstant =
  _test_functional_validateReturn("ObjectHttpConstant")(ObjectHttpConstant)(
    (p: (input: ObjectHttpConstant) => ObjectHttpConstant) =>
      typia.functional.validateReturn(p),
  );
