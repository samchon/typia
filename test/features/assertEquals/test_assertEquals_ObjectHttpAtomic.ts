import typia from "../../../src";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_assertEquals_ObjectHttpAtomic = _test_assertEquals(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(
    ObjectHttpAtomic
)((input) => typia.assertEquals<ObjectHttpAtomic>(input));
