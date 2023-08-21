import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_validateEquals_TagTypeBigInt = _test_validateEquals(
    "TagTypeBigInt",
)<TagTypeBigInt>(TagTypeBigInt)(typia.createValidateEquals<TagTypeBigInt>());
