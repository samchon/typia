import typia from "typia";

import { _test_http_formData } from "../../internal/_test_http_formData";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_http_formData_ObjectHttpFormData = (): void =>
  _test_http_formData("ObjectHttpFormData")<ObjectHttpFormData>(
    ObjectHttpFormData,
  )((input) => typia.http.formData<ObjectHttpFormData>(input));
