import typia from "typia";

import { _test_http_formData } from "../../internal/_test_http_formData";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_http_createFormData_ObjectHttpNullable = _test_http_formData(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)(
  typia.http.createFormData<ObjectHttpNullable>(),
);
