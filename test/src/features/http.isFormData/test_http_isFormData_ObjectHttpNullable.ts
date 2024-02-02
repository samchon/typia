import typia from "typia";

import { _test_http_isFormData } from "../../internal/_test_http_isFormData";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_http_isFormData_ObjectHttpNullable = _test_http_isFormData(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
  typia.http.isFormData<ObjectHttpNullable>(input),
);
