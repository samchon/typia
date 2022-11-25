import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_TagFormat = _test_validateEquals(
    "TagFormat",
    TagFormat.generate,
    (input) => TSON.validateEquals(input),
);
