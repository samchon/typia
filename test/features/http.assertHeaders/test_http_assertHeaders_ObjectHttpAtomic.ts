import typia from "../../../src";

import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_http_assertHeaders_ObjectHttpAtomic = _test_http_assertHeaders(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(
    ObjectHttpAtomic
)((input) => typia.http.assertHeaders<ObjectHttpAtomic>(input));
