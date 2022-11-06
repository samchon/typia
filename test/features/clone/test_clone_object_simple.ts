import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_clone } from "./_test_clone";

export const test_clone_object_simple = _test_clone(
    "simple object",
    ObjectSimple.generate,
    (input) => TSON.clone(input),
);
