import typia from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ObjectUndefined = _test_assertEquals(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createAssertEquals<ObjectUndefined>(),
);
