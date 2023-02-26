import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_createValidateEquals_TagBigInt = _test_validateEquals(
    "TagBigInt",
    TagBigInt.generate,
    typia.createValidateEquals<TagBigInt>(),
);
