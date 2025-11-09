import typia from "typia";

import { _test_http_isHeaders } from "../../internal/_test_http_isHeaders";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_createIsHeaders_ObjectHttpArray = (): void => _test_http_isHeaders(
    "ObjectHttpArray",
)<ObjectHttpArray>(
    ObjectHttpArray
)(typia.http.createIsHeaders<ObjectHttpArray>());
