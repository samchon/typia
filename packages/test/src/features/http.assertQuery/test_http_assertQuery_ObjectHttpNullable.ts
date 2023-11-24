import typia from "typia";

import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_http_assertQuery_ObjectHttpNullable = _test_http_assertQuery(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
  typia.http.assertQuery<ObjectHttpNullable>(input),
);
