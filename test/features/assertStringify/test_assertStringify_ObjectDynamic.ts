import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_assertStringify_ObjectDynamic = _test_assertStringify(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => typia.assertStringify<ObjectDynamic>(input),
    ObjectDynamic.SPOILERS,
);
