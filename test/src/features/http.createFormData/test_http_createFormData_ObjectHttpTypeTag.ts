import typia from "typia";

import { _test_http_formData } from "../../internal/_test_http_formData";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_createFormData_ObjectHttpTypeTag = _test_http_formData(
  "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)(
  typia.http.createFormData<ObjectHttpTypeTag>(),
);
