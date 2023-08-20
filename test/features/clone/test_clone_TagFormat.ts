import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TagFormat } from "../../structures/TagFormat";

export const test_clone_TagFormat = _test_clone(
    "TagFormat",
    TagFormat.generate,
    (input) => typia.clone<TagFormat>(input),
);
