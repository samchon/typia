import typia from "typia";

import { _test_http_validateFormData } from "../../internal/_test_http_validateFormData";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_validateFormData_ObjectHttpTypeTag =
  _test_http_validateFormData("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag,
  )((input) => typia.http.validateFormData<ObjectHttpTypeTag>(input));
