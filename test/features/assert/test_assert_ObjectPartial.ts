import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_assert_ObjectPartial = _test_assert(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)((input) => typia.assert<ObjectPartial>(input));
