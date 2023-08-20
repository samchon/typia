import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TagLength } from "../../structures/TagLength";

export const test_stringify_TagLength = _test_stringify(
    "TagLength",
    TagLength.generate,
    (input) => typia.stringify<TagLength>(input),
);
