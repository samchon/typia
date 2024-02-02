import typia from "typia";

import { _test_http_validateFormData } from "../../internal/_test_http_validateFormData";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_http_validateFormData_ObjectHttpUndefindable =
  _test_http_validateFormData("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )((input) => typia.http.validateFormData<ObjectHttpUndefindable>(input));
