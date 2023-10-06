import typia from "../../../src";

import { _test_http_isQuery } from "../../internal/_test_http_isQuery";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_createIsQuery_ObjectHttpConstant = _test_http_isQuery(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(
    ObjectHttpConstant
)(typia.http.createIsQuery<ObjectHttpConstant>());
