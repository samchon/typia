import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ObjectUnionImplicit = _test_clone(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    TSON.createClone<ObjectUnionImplicit>(),
);
