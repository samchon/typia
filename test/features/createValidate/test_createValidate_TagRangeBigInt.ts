import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_createValidate_TagRangeBigInt = _test_validate(
    "TagRangeBigInt",
    TagRangeBigInt.generate,
    typia.createValidate<TagRangeBigInt>(),
    TagRangeBigInt.SPOILERS,
);
