import typia from "typia";

import { _test_http_isFormData } from "../../internal/_test_http_isFormData";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_http_isFormData_ObjectHttpFormData = _test_http_isFormData(
  "ObjectHttpFormData",
)<ObjectHttpFormData>(ObjectHttpFormData)((input) =>
  typia.http.isFormData<ObjectHttpFormData>(input),
);
