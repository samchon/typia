import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_TagRange = _test_validateEquals(
    "TagRange",
    TagRange.generate,
    (input) => TSON.validateEquals(input),
);
