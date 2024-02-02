import typia from "typia";

import { _test_http_isFormData } from "../../internal/_test_http_isFormData";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_isFormData_ObjectHttpTypeTag = _test_http_isFormData(
  "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input) =>
  typia.http.isFormData<ObjectHttpTypeTag>(input),
);
