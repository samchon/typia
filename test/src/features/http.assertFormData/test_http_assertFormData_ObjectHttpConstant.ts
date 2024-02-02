import typia from "typia";

import { _test_http_assertFormData } from "../../internal/_test_http_assertFormData";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_assertFormData_ObjectHttpConstant =
  _test_http_assertFormData("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )((input) => typia.http.assertFormData<ObjectHttpConstant>(input));
