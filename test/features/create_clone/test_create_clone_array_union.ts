import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_array_union = _test_clone(
    "union array",
    ArrayUnion.generate,
    TSON.createClone<ArrayUnion>(),
);
