import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_is_TagBigInt = _test_is<TagBigInt>(TagBigInt)((input) =>
    typia.is<TagBigInt>(input),
);
