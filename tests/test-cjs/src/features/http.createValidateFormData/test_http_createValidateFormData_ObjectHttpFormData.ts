import typia from "typia";

import { _test_http_validateFormData } from "../../internal/_test_http_validateFormData";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_http_createValidateFormData_ObjectHttpFormData = (): void =>
  _test_http_validateFormData("ObjectHttpFormData")<ObjectHttpFormData>(
    ObjectHttpFormData,
  )(typia.http.createValidateFormData<ObjectHttpFormData>());
