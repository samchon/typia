import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_clone } from "./_test_clone";

export const test_clone_tag_pattern = _test_clone(
    "pattern tag",
    TagPattern.generate,
    (input) => TSON.clone(input),
);
