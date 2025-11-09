import typia from "typia";

import { _test_http_headers } from "../../internal/_test_http_headers";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_headers_ObjectHttpTypeTag = (): void => _test_http_headers(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(
    ObjectHttpTypeTag
)((input) => typia.http.headers<ObjectHttpTypeTag>(input));
