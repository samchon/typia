import typia from "typia";

import { _test_http_formData } from "../../internal/_test_http_formData";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_http_formData_ObjectHttpUndefindable = _test_http_formData(
  "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)((input) =>
  typia.http.formData<ObjectHttpUndefindable>(input),
);
