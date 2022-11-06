import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_object_union_double = _test_is_clone(
    "double union object",
    ObjectUnionDouble.generate,
    (input) => TSON.isClone(input),
    ObjectUnionDouble.SPOILERS,
);
