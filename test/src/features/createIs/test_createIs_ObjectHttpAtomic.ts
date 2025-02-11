import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_createIs_ObjectHttpAtomic = _test_is(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(
    ObjectHttpAtomic
)(typia.createIs<ObjectHttpAtomic>());
