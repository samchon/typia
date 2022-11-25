import TSON from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectDynamic = _test_assertStringify(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => TSON.assertStringify(input),
    ObjectDynamic.SPOILERS,
);