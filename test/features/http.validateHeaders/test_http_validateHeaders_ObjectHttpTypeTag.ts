import typia from "../../../src";

import { _test_http_validateHeaders } from "../../internal/_test_http_validateHeaders";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_validateHeaders_ObjectHttpTypeTag = _test_http_validateHeaders(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(
    ObjectHttpTypeTag
)((input) => typia.http.validateHeaders<ObjectHttpTypeTag>(input));
