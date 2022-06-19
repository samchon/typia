import TSON from "../../../src";
import { ObjectUnion } from "../../structures/ObjectUnion";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_object_union = _test_stringify(
    "union object",
    ObjectUnion.generate(),
    (input) => TSON.stringify(input),
);
