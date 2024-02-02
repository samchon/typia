import typia from "typia";

import { _test_http_formData } from "../../internal/_test_http_formData";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_http_createFormData_ObjectHttpCommentTag =
  _test_http_formData("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )(typia.http.createFormData<ObjectHttpCommentTag>());
