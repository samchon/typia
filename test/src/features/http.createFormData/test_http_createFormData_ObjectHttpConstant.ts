import typia from "typia";

import { _test_http_formData } from "../../internal/_test_http_formData";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_createFormData_ObjectHttpConstant = _test_http_formData(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)(
  typia.http.createFormData<ObjectHttpConstant>(),
);
