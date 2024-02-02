import typia from "typia";

import { _test_http_formData } from "../../internal/_test_http_formData";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_formData_ObjectHttpConstant = _test_http_formData(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
  typia.http.formData<ObjectHttpConstant>(input),
);
