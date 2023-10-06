import typia from "../../../src";

import { _test_http_isQuery } from "../../internal/_test_http_isQuery";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_createIsQuery_ObjectHttpTypeTag = _test_http_isQuery(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(
    ObjectHttpTypeTag
)(typia.http.createIsQuery<ObjectHttpTypeTag>());
