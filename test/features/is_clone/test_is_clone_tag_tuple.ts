import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_tag_tuple = _test_is_clone(
    "tuple tag",
    TagTuple.generate,
    (input) => TSON.isClone(input),
    TagTuple.SPOILERS,
);
