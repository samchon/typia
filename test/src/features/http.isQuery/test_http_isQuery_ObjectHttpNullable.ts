import typia from "typia";

import { _test_http_isQuery } from "../../internal/_test_http_isQuery";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_http_isQuery_ObjectHttpNullable = (): void => _test_http_isQuery(
    "ObjectHttpNullable",
)<ObjectHttpNullable>(
    ObjectHttpNullable
)((input) => typia.http.isQuery<ObjectHttpNullable>(input));
