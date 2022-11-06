import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_object_simple = _test_is_clone(
    "simple object",
    ObjectSimple.generate,
    (input) => TSON.isClone(input),
    ObjectSimple.SPOILERS,
);
