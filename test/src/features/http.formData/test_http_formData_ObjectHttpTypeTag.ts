import typia from "typia";

import { _test_http_formData } from "../../internal/_test_http_formData";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_formData_ObjectHttpTypeTag = _test_http_formData(
  "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input) =>
  typia.http.formData<ObjectHttpTypeTag>(input),
);
