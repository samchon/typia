import typia from "typia";

import { _test_http_query } from "../../internal/_test_http_query";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_http_createQuery_ObjectHttpAtomic = (): void => _test_http_query(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(
    ObjectHttpAtomic
)(typia.http.createQuery<ObjectHttpAtomic>());
