import typia from "typia";

import { _test_http_validateFormData } from "../../internal/_test_http_validateFormData";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_validateFormData_ObjectHttpConstant =
  _test_http_validateFormData("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )((input) => typia.http.validateFormData<ObjectHttpConstant>(input));
