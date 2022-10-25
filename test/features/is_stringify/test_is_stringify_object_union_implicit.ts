import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_object_union_implicit = _test_is_stringify(
    "union object",
    ObjectUnionImplicit.generate,
    (input) => TSON.isStringify(input),
    ObjectUnionImplicit.SPOILERS,
);
