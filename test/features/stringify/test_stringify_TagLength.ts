import typia from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_TagLength = _test_stringify(
    "TagLength",
    TagLength.generate,
    (input) => typia.stringify(input),
);
