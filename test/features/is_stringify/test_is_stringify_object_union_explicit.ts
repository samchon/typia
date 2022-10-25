import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_object_union_explicit = _test_is_stringify(
    "union object",
    ObjectUnionExplicit.generate,
    (input) => TSON.isStringify(input),
    ObjectUnionExplicit.SPOILERS,
);
