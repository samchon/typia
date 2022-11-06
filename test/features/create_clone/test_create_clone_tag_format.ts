import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_tag_format = _test_clone(
    "format tag",
    TagFormat.generate,
    TSON.createClone<TagFormat>(),
);
