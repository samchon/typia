import typia from "typia";

import { _test_http_assertFormData } from "../../internal/_test_http_assertFormData";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_http_assertFormData_ObjectHttpUndefindable =
  _test_http_assertFormData("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )((input) => typia.http.assertFormData<ObjectHttpUndefindable>(input));
