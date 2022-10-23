import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_object_union_explicit = _test_stringify(
    "union object",
    ObjectUnionExplicit.generate(),
    TSON.createStringify<ObjectUnionExplicit>(),
);
