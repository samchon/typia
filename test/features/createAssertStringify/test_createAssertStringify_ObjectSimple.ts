import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_createAssertStringify_ObjectSimple = _test_assertStringify(
    "ObjectSimple",
    ObjectSimple.generate,
    typia.createAssertStringify<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
