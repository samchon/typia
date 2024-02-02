import typia from "typia";

import { _test_http_formData } from "../../internal/_test_http_formData";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_http_createFormData_ObjectHttpAtomic = _test_http_formData(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)(
  typia.http.createFormData<ObjectHttpAtomic>(),
);
