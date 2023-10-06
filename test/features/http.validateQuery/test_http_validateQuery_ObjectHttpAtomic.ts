import typia from "../../../src";

import { _test_http_validateQuery } from "../../internal/_test_http_validateQuery";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_http_validateQuery_ObjectHttpAtomic = _test_http_validateQuery(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(
    ObjectHttpAtomic
)((input) => typia.http.validateQuery<ObjectHttpAtomic>(input));
