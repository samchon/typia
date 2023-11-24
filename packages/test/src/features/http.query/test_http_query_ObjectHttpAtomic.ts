import typia from "typia";

import { _test_http_query } from "../../internal/_test_http_query";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_http_query_ObjectHttpAtomic = _test_http_query(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)((input) =>
  typia.http.query<ObjectHttpAtomic>(input),
);
