import typia from "../../../src";
import { TagBigInt } from "../../structures/TagBigInt";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_TagBigInt = _test_validate(
    "TagBigInt",
    TagBigInt.generate,
    (input) => typia.validate(input),
    TagBigInt.SPOILERS,
);
