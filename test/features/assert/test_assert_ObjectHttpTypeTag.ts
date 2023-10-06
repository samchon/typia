import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_assert_ObjectHttpTypeTag = _test_assert(
    "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(
    ObjectHttpTypeTag
)((input) => typia.assert<ObjectHttpTypeTag>(input));
