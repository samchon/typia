import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_clone } from "./_test_clone";

export const test_clone_tag_array = _test_clone(
    "array tag",
    TagArray.generate,
    (input) => TSON.clone(input),
);
