import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_assertStringify_ObjectInternal = _test_assertStringify(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.assertStringify(input),
    ObjectInternal.SPOILERS,
);
