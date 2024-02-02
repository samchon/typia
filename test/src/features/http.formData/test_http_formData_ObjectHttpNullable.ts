import typia from "typia";

import { _test_http_formData } from "../../internal/_test_http_formData";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_http_formData_ObjectHttpNullable = _test_http_formData(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
  typia.http.formData<ObjectHttpNullable>(input),
);
