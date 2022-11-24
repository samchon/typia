import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_equals } from "../internal/_test_equals";

export const test_create_equals_object_union_double = _test_equals(
    "double union object",
    ObjectUnionDouble.generate,
    TSON.createEquals<ObjectUnionDouble>(),
);
