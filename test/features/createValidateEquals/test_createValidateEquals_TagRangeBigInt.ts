import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_createValidateEquals_TagRangeBigInt = _test_validateEquals(
    "TagRangeBigInt",
    TagRangeBigInt.generate,
    typia.createValidateEquals<TagRangeBigInt>(),
);
