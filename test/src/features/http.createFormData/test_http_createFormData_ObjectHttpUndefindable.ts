import typia from "typia";

import { _test_http_formData } from "../../internal/_test_http_formData";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_http_createFormData_ObjectHttpUndefindable =
  _test_http_formData("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )(typia.http.createFormData<ObjectHttpUndefindable>());
