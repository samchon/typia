import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_assertStringify_ObjectUnionDouble = _test_assertStringify(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.assertStringify<ObjectUnionDouble>(input),
    ObjectUnionDouble.SPOILERS,
);
