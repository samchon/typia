import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createAssertClone_ObjectUndefined = _test_assertClone(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createAssertClone<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
