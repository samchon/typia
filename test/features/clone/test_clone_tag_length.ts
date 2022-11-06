import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_clone } from "./_test_clone";

export const test_clone_tag_length = _test_clone(
    "length tag",
    TagLength.generate,
    (input) => TSON.clone(input),
);
