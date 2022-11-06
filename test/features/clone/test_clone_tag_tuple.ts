import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_clone } from "./_test_clone";

export const test_clone_tag_tuple = _test_clone(
    "tuple tag",
    TagTuple.generate,
    (input) => TSON.clone(input),
);
