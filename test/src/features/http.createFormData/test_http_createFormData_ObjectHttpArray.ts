import typia from "typia";

import { _test_http_formData } from "../../internal/_test_http_formData";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_createFormData_ObjectHttpArray = _test_http_formData(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)(
  typia.http.createFormData<ObjectHttpArray>(),
);
