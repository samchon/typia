import typia from "typia";

import { _test_http_validateFormData } from "../../internal/_test_http_validateFormData";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_http_createValidateFormData_ObjectHttpCommentTag =
  _test_http_validateFormData("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )(typia.http.createValidateFormData<ObjectHttpCommentTag>());
