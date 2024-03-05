import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_functional_validateReturn_ObjectHttpFormData =
  _test_functional_validateReturn("ObjectHttpFormData")(ObjectHttpFormData)(
    (p: (input: ObjectHttpFormData) => ObjectHttpFormData) =>
      typia.functional.validateReturn(p),
  );
