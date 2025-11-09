import typia from "typia";

import { _test_http_isQuery } from "../../internal/_test_http_isQuery";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_createIsQuery_ObjectHttpArray = (): void => _test_http_isQuery(
    "ObjectHttpArray",
)<ObjectHttpArray>(
    ObjectHttpArray
)(typia.http.createIsQuery<ObjectHttpArray>());
