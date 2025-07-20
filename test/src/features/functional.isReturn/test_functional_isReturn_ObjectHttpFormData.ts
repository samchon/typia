import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_functional_isReturn_ObjectHttpFormData = (): void =>
  _test_functional_isReturn("ObjectHttpFormData")(ObjectHttpFormData)(
    (p: (input: ObjectHttpFormData) => ObjectHttpFormData) =>
      typia.functional.isReturn(p),
  );
