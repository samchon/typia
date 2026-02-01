import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_functional_isParameters_ObjectHttpFormData = (): void => _test_functional_isParameters(
  "ObjectHttpFormData"
)(ObjectHttpFormData)(
  (p: (input: ObjectHttpFormData) => ObjectHttpFormData) => typia.functional.isParameters(p),
)