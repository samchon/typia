import typia from "typia";

import { _test_http_assertFormData } from "../../internal/_test_http_assertFormData";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_http_createAssertFormData_ObjectHttpUndefindable =
  _test_http_assertFormData("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )(typia.http.createAssertFormData<ObjectHttpUndefindable>());
