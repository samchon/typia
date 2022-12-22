import typia from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectUnionImplicit = _test_assertStringify(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.assertStringify(input),
    ObjectUnionImplicit.SPOILERS,
);
