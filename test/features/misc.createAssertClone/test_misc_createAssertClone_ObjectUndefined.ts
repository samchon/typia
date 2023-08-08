import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_misc_assertClone_ObjectUndefined = _test_misc_assertClone(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.misc.createAssertClone<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
