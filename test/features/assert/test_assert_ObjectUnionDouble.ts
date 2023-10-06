import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_assert_ObjectUnionDouble = _test_assert(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(
    ObjectUnionDouble
)((input) => typia.assert<ObjectUnionDouble>(input));
