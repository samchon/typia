import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_object_union_implicit =
    _test_is_stringify(
        "union object",
        ObjectUnionImplicit.generate,
        TSON.createIsStringify<ObjectUnionImplicit>(),
        ObjectUnionImplicit.SPOILERS,
    );
