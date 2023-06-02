import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagLength } from "../../structures/TagLength";

export const test_assertEquals_TagLength = _test_assertEquals(
    "TagLength",
    TagLength.generate,
    (input) => typia.assertEquals(input),
);
