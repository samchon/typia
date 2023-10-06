import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_createAssert_ObjectHttpArray = _test_assert(
    "ObjectHttpArray",
)<ObjectHttpArray>(
    ObjectHttpArray
)(typia.createAssert<ObjectHttpArray>());
