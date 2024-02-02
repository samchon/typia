import typia from "typia";

import { _test_http_validateFormData } from "../../internal/_test_http_validateFormData";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_createValidateFormData_ObjectHttpArray =
  _test_http_validateFormData("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )(typia.http.createValidateFormData<ObjectHttpArray>());
