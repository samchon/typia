import typia from "typia";

import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_assertQuery_ObjectHttpArray = _test_http_assertQuery(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)((input) =>
  typia.http.assertQuery<ObjectHttpArray>(input),
);
