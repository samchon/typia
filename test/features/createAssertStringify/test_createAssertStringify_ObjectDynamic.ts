import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_createAssertStringify_ObjectDynamic = _test_assertStringify(
    "ObjectDynamic",
    ObjectDynamic.generate,
    typia.createAssertStringify<ObjectDynamic>(),
    ObjectDynamic.SPOILERS,
);
