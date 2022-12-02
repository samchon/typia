import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectUnionExplicit = _test_assertStringify(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => TSON.assertStringify(input),
    ObjectUnionExplicit.SPOILERS,
);
