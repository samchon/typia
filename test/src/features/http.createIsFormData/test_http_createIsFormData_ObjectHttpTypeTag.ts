import typia from "typia";

import { _test_http_isFormData } from "../../internal/_test_http_isFormData";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_createIsFormData_ObjectHttpTypeTag =
  _test_http_isFormData("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag,
  )(typia.http.createIsFormData<ObjectHttpTypeTag>());
