import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_assertStringify_ObjectUnionExplicit = _test_assertStringify(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => typia.assertStringify<ObjectUnionExplicit>(input),
    ObjectUnionExplicit.SPOILERS,
);
