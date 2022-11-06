import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_clone } from "./_test_clone";

export const test_clone_object_union_double = _test_clone(
    "double union object",
    ObjectUnionDouble.generate,
    (input) => TSON.clone(input),
);
