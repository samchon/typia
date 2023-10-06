import typia from "../../../src";

import { _test_is } from "../../internal/_test_is";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_is_ObjectHttpAtomic = _test_is(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(
    ObjectHttpAtomic
)((input) => typia.is<ObjectHttpAtomic>(input));
