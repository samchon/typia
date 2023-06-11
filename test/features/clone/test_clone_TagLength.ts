import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TagLength } from "../../structures/TagLength";

export const test_clone_TagLength = _test_clone(
    "TagLength",
    TagLength.generate,
    (input) => typia.clone(input),
);
