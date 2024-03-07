import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_functional_validateFunctionAsync_ObjectHttpFormData =
  _test_functional_validateFunctionAsync("ObjectHttpFormData")(
    ObjectHttpFormData,
  )((p: (input: ObjectHttpFormData) => Promise<ObjectHttpFormData>) =>
    typia.functional.validateFunction(p),
  );
