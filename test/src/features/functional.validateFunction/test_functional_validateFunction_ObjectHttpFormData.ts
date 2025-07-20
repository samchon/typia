import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_functional_validateFunction_ObjectHttpFormData = (): void =>
  _test_functional_validateFunction("ObjectHttpFormData")(ObjectHttpFormData)(
    (p: (input: ObjectHttpFormData) => ObjectHttpFormData) =>
      typia.functional.validateFunction(p),
  );
