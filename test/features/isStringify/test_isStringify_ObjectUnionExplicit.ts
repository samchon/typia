import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ObjectUnionExplicit = _test_isStringify(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => TSON.isStringify(input),
    ObjectUnionExplicit.SPOILERS,
);
