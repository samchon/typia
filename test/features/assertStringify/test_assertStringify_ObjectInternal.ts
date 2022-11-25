import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectInternal = _test_assertStringify(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => TSON.assertStringify(input),
    ObjectInternal.SPOILERS,
);
