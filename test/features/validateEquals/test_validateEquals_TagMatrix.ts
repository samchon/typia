import typia from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_TagMatrix = _test_validateEquals(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.validateEquals(input),
);
