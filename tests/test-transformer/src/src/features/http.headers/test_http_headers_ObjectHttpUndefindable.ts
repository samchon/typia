import typia from "typia";

import { _test_http_headers } from "../../internal/_test_http_headers";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_http_headers_ObjectHttpUndefindable = (): void => _test_http_headers(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(
    ObjectHttpUndefindable
)((input) => typia.http.headers<ObjectHttpUndefindable>(input));
