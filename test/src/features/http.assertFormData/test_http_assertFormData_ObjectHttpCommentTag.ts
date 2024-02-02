import typia from "typia";

import { _test_http_assertFormData } from "../../internal/_test_http_assertFormData";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_http_assertFormData_ObjectHttpCommentTag =
  _test_http_assertFormData("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )((input) => typia.http.assertFormData<ObjectHttpCommentTag>(input));
