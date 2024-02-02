import typia from "typia";

import { _test_http_validateFormData } from "../../internal/_test_http_validateFormData";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_http_validateFormData_ObjectHttpNullable =
  _test_http_validateFormData("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )((input) => typia.http.validateFormData<ObjectHttpNullable>(input));
