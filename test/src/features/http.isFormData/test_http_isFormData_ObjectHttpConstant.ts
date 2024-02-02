import typia from "typia";

import { _test_http_isFormData } from "../../internal/_test_http_isFormData";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_isFormData_ObjectHttpConstant = _test_http_isFormData(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
  typia.http.isFormData<ObjectHttpConstant>(input),
);
