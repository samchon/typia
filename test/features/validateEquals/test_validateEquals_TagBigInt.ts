import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_validateEquals_TagBigInt = _test_validateEquals(
    "TagBigInt",
    TagBigInt.generate,
    (input) => typia.validateEquals(input),
);
