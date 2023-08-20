import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_createValidateEquals_TagTypeBigInt = _test_validateEquals(
    "TagTypeBigInt",
    TagTypeBigInt.generate,
    typia.createValidateEquals<TagTypeBigInt>(),
);
