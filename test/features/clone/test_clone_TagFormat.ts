import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_TagFormat = _test_clone(
    "TagFormat",
    TagFormat.generate,
    (input) => TSON.clone(input),
);
