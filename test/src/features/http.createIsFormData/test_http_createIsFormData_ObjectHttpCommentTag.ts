import typia from "typia";

import { _test_http_isFormData } from "../../internal/_test_http_isFormData";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_http_createIsFormData_ObjectHttpCommentTag =
  _test_http_isFormData("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )(typia.http.createIsFormData<ObjectHttpCommentTag>());
