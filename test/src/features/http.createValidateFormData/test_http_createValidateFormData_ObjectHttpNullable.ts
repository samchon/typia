import typia from "typia";

import { _test_http_validateFormData } from "../../internal/_test_http_validateFormData";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_http_createValidateFormData_ObjectHttpNullable =
  _test_http_validateFormData("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )(typia.http.createValidateFormData<ObjectHttpNullable>());
