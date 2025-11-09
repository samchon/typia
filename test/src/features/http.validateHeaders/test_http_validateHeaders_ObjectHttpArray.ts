import typia from "typia";

import { _test_http_validateHeaders } from "../../internal/_test_http_validateHeaders";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_validateHeaders_ObjectHttpArray = (): void => _test_http_validateHeaders(
    "ObjectHttpArray",
)<ObjectHttpArray>(
    ObjectHttpArray
)((input) => typia.http.validateHeaders<ObjectHttpArray>(input));
