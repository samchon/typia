import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_object_union_double = _test_is_stringify(
    "double union object",
    ObjectUnionDouble.generate,
    TSON.createIsStringify<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);
