import typia from "typia";

import { _test_http_isHeaders } from "../../internal/_test_http_isHeaders";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_createIsHeaders_ObjectHttpTypeTag = (): void => _test_http_isHeaders(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(
    ObjectHttpTypeTag
)(typia.http.createIsHeaders<ObjectHttpTypeTag>());
