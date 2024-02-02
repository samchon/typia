import typia from "typia";

import { _test_http_assertFormData } from "../../internal/_test_http_assertFormData";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_createAssertFormData_ObjectHttpTypeTag =
  _test_http_assertFormData("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag,
  )(typia.http.createAssertFormData<ObjectHttpTypeTag>());
