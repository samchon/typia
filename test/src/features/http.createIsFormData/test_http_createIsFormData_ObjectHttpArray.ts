import typia from "typia";

import { _test_http_isFormData } from "../../internal/_test_http_isFormData";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_createIsFormData_ObjectHttpArray = _test_http_isFormData(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)(
  typia.http.createIsFormData<ObjectHttpArray>(),
);
