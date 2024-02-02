import typia from "typia";

import { _test_http_isFormData } from "../../internal/_test_http_isFormData";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_http_isFormData_ObjectHttpCommentTag = _test_http_isFormData(
  "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)((input) =>
  typia.http.isFormData<ObjectHttpCommentTag>(input),
);
