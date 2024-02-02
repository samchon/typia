import typia from "typia";

import { _test_http_validateFormData } from "../../internal/_test_http_validateFormData";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_createValidateFormData_ObjectHttpTypeTag =
  _test_http_validateFormData("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag,
  )(typia.http.createValidateFormData<ObjectHttpTypeTag>());
