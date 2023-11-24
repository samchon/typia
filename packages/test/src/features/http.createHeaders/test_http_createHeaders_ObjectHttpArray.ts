import typia from "typia";

import { _test_http_headers } from "../../internal/_test_http_headers";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_createHeaders_ObjectHttpArray = _test_http_headers(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)(
  typia.http.createHeaders<ObjectHttpArray>(),
);
