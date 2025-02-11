import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_functional_isFunction_ObjectHttpFormData = _test_functional_isFunction(
  "ObjectHttpFormData"
)(ObjectHttpFormData)(
  (p: (input: ObjectHttpFormData) => ObjectHttpFormData) => typia.functional.isFunction(p),
)