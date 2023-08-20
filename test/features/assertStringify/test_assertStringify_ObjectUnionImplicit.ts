import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_assertStringify_ObjectUnionImplicit = _test_assertStringify(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.assertStringify<ObjectUnionImplicit>(input),
    ObjectUnionImplicit.SPOILERS,
);
