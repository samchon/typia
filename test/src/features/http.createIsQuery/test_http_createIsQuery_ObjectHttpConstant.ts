import typia from "typia";

import { _test_http_isQuery } from "../../internal/_test_http_isQuery";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_createIsQuery_ObjectHttpConstant = (): void => _test_http_isQuery(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(
    ObjectHttpConstant
)(typia.http.createIsQuery<ObjectHttpConstant>());
