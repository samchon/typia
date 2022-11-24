import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_object_union_double = _test_stringify(
    "double union object",
    ObjectUnionDouble.generate,
    TSON.createStringify<ObjectUnionDouble>(),
);
