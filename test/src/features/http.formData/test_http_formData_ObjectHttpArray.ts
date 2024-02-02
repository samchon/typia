import typia from "typia";

import { _test_http_formData } from "../../internal/_test_http_formData";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_formData_ObjectHttpArray = _test_http_formData(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)((input) =>
  typia.http.formData<ObjectHttpArray>(input),
);
