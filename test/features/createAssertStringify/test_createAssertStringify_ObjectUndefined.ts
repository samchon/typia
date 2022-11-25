import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectUndefined = _test_assertStringify(
    "ObjectUndefined",
    ObjectUndefined.generate,
    TSON.createAssertStringify<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
