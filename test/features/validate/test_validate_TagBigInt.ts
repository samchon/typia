import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_validate_TagBigInt = _test_validate(
    "TagBigInt",
    TagBigInt.generate,
    (input) => typia.validate<TagBigInt>(input),
    TagBigInt.SPOILERS,
);
