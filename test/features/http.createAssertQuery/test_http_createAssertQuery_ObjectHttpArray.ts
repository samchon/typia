import typia from "../../../src";

import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_createAssertQuery_ObjectHttpArray = _test_http_assertQuery(
    "ObjectHttpArray",
)<ObjectHttpArray>(
    ObjectHttpArray
)(typia.http.createAssertQuery<ObjectHttpArray>());
