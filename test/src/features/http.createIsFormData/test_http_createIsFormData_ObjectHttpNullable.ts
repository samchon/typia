import typia from "typia";

import { _test_http_isFormData } from "../../internal/_test_http_isFormData";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_http_createIsFormData_ObjectHttpNullable =
  _test_http_isFormData("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )(typia.http.createIsFormData<ObjectHttpNullable>());
