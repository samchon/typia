import typia from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_TagTuple = _test_validateEquals(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.validateEquals(input),
);
