import typia from "typia";

import { _test_http_query } from "../../internal/_test_http_query";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_query_ObjectHttpArray = _test_http_query(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)((input) =>
  typia.http.query<ObjectHttpArray>(input),
);
