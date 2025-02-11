import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_equalsParameters_ObjectHttpConstant =
  _test_functional_equalsParameters("ObjectHttpConstant")(ObjectHttpConstant)(
    (p: (input: ObjectHttpConstant) => ObjectHttpConstant) =>
      typia.functional.equalsParameters(p),
  );
