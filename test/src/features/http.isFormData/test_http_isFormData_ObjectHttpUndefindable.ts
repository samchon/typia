import typia from "typia";

import { _test_http_isFormData } from "../../internal/_test_http_isFormData";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_http_isFormData_ObjectHttpUndefindable =
  _test_http_isFormData("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )((input) => typia.http.isFormData<ObjectHttpUndefindable>(input));
