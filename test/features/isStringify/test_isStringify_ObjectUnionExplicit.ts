import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_isStringify_ObjectUnionExplicit = _test_isStringify(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => typia.isStringify<ObjectUnionExplicit>(input),
    ObjectUnionExplicit.SPOILERS,
);
