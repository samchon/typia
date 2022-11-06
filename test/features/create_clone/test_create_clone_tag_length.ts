import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_tag_length = _test_clone(
    "length tag",
    TagLength.generate,
    TSON.createClone<TagLength>(),
);
