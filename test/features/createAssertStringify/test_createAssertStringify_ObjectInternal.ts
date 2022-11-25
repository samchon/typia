import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectInternal = _test_assertStringify(
    "ObjectInternal",
    ObjectInternal.generate,
    TSON.createAssertStringify<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);