import typia from "typia";

import { _test_http_headers } from "../../internal/_test_http_headers";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_headers_ObjectHttpConstant = (): void => _test_http_headers(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(
    ObjectHttpConstant
)((input) => typia.http.headers<ObjectHttpConstant>(input));
