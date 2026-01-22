import typia from "typia";

import { _test_http_validateFormData } from "../../internal/_test_http_validateFormData";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_http_validateFormData_ObjectHttpFormData = (): void =>
  _test_http_validateFormData("ObjectHttpFormData")<ObjectHttpFormData>(
    ObjectHttpFormData,
  )((input) => typia.http.validateFormData<ObjectHttpFormData>(input));
