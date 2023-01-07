import typia from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_TagLength = _test_validateEquals(
    "TagLength",
    TagLength.generate,
    (input) => typia.validateEquals(input),
);