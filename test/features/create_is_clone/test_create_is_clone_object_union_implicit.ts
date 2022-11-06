import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_object_union_implicit =
    _test_is_clone(
        "union object",
        ObjectUnionImplicit.generate,
        TSON.createIsClone<ObjectUnionImplicit>(),
        ObjectUnionImplicit.SPOILERS,
    );
