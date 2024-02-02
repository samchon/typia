import typia from "typia";

import { _test_http_isFormData } from "../../internal/_test_http_isFormData";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_createIsFormData_ObjectHttpConstant =
  _test_http_isFormData("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )(typia.http.createIsFormData<ObjectHttpConstant>());
