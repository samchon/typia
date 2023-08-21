import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_assertEquals_ObjectUndefined = _test_assertEquals(
    "ObjectUndefined",
)<ObjectUndefined>(ObjectUndefined)(
    typia.createAssertEquals<ObjectUndefined>(),
);
