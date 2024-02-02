import typia from "typia";

import { _test_http_validateFormData } from "../../internal/_test_http_validateFormData";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_http_createValidateFormData_ObjectHttpAtomic =
  _test_http_validateFormData("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )(typia.http.createValidateFormData<ObjectHttpAtomic>());
