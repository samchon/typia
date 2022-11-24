import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_object_union_double = _test_clone(
    "double union object",
    ObjectUnionDouble.generate,
    TSON.createClone<ObjectUnionDouble>(),
);
