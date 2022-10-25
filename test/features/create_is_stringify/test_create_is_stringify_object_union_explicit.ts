import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_object_union_explicit =
    _test_is_stringify(
        "union object",
        ObjectUnionExplicit.generate,
        TSON.createIsStringify<ObjectUnionExplicit>(),
        ObjectUnionExplicit.SPOILERS,
    );
