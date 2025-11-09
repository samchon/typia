import typia from "typia";

import { _test_http_isFormData } from "../../internal/_test_http_isFormData";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_http_createIsFormData_ObjectHttpFormData = (): void =>
  _test_http_isFormData("ObjectHttpFormData")<ObjectHttpFormData>(
    ObjectHttpFormData,
  )(typia.http.createIsFormData<ObjectHttpFormData>());
