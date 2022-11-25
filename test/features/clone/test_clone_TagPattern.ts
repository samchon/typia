import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_TagPattern = _test_clone(
    "TagPattern",
    TagPattern.generate,
    (input) => TSON.clone(input),
);
