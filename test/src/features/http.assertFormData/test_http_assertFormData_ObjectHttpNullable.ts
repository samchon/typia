import typia from "typia";

import { _test_http_assertFormData } from "../../internal/_test_http_assertFormData";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_http_assertFormData_ObjectHttpNullable =
  _test_http_assertFormData("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )((input) => typia.http.assertFormData<ObjectHttpNullable>(input));
