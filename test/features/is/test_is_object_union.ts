import TSON from "../../../src";
import { ObjectUnion } from "../../structures/ObjectUnion";
import { _test_is } from "./_test_is";

export const test_is_object_union = _test_is(
    "union object",
    ObjectUnion.generate,
    (input) => TSON.is(input),
);
