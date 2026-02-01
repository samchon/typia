import typia from "typia";

import { _test_http_validateHeaders } from "../../internal/_test_http_validateHeaders";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_createValidateHeaders_ObjectHttpTypeTag = (): void => _test_http_validateHeaders(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(
    ObjectHttpTypeTag
)(typia.http.createValidateHeaders<ObjectHttpTypeTag>());
