import typia from "typia";

import { _test_http_validateFormData } from "../../internal/_test_http_validateFormData";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_validateFormData_ObjectHttpArray =
  _test_http_validateFormData("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )((input) => typia.http.validateFormData<ObjectHttpArray>(input));
