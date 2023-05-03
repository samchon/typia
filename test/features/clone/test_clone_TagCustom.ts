import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TagCustom } from "../../structures/TagCustom";

export const test_clone_TagCustom = _test_clone(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.clone(input),
);
