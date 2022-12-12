import typia from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_TagLength = _test_equals(
    "TagLength",
    TagLength.generate,
    (input) => typia.equals(input),
);
