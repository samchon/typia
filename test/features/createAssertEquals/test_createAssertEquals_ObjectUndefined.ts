import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createAssertEquals_ObjectUndefined = _test_assertEquals(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createAssertEquals<ObjectUndefined>(),
);
