import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_validate_TagRangeBigInt = _test_validate(
    "TagRangeBigInt",
)<TagRangeBigInt>(TagRangeBigInt)(typia.createValidate<TagRangeBigInt>());
