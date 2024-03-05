import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_isParameters_ObjectHttpConstant =
  _test_functional_isParameters("ObjectHttpConstant")(ObjectHttpConstant)(
    (p: (input: ObjectHttpConstant) => ObjectHttpConstant) =>
      typia.functional.isParameters(p),
  );
