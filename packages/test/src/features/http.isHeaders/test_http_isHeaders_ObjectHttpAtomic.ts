import typia from "typia";

import { _test_http_isHeaders } from "../../internal/_test_http_isHeaders";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_http_isHeaders_ObjectHttpAtomic = _test_http_isHeaders(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)((input) =>
  typia.http.isHeaders<ObjectHttpAtomic>(input),
);
