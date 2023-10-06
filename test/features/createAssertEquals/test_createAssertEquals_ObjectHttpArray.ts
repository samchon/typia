import typia from "../../../src";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_createAssertEquals_ObjectHttpArray = _test_assertEquals(
    "ObjectHttpArray",
)<ObjectHttpArray>(
    ObjectHttpArray
)(typia.createAssertEquals<ObjectHttpArray>());
