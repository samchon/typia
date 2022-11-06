import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_clone } from "./_test_clone";

export const test_clone_tag_format = _test_clone(
    "format tag",
    TagFormat.generate,
    (input) => TSON.clone(input),
);
