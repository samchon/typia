import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_clone } from "./_test_clone";

export const test_clone_tag_type = _test_clone(
    "type tag",
    TagType.generate,
    (input) => TSON.clone(input),
);
