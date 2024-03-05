import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_validateFunction_ObjectHttpConstant =
  _test_functional_validateFunction("ObjectHttpConstant")(ObjectHttpConstant)(
    (p: (input: ObjectHttpConstant) => ObjectHttpConstant) =>
      typia.functional.validateFunction(p),
  );
