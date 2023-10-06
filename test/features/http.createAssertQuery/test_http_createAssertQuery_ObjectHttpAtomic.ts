import typia from "../../../src";

import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_http_createAssertQuery_ObjectHttpAtomic = _test_http_assertQuery(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(
    ObjectHttpAtomic
)(typia.http.createAssertQuery<ObjectHttpAtomic>());
