import typia from "typia";

import { _test_http_isQuery } from "../../internal/_test_http_isQuery";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_http_createIsQuery_ObjectHttpNullable = _test_http_isQuery(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)(
  typia.http.createIsQuery<ObjectHttpNullable>(),
);
