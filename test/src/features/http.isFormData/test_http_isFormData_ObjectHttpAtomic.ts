import typia from "typia";

import { _test_http_isFormData } from "../../internal/_test_http_isFormData";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_http_isFormData_ObjectHttpAtomic = _test_http_isFormData(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)((input) =>
  typia.http.isFormData<ObjectHttpAtomic>(input),
);
