import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_createValidate_TagTypeBigInt = _test_validate(
    "TagTypeBigInt",
    TagTypeBigInt.generate,
    typia.createValidate<TagTypeBigInt>(),
    TagTypeBigInt.SPOILERS,
);
