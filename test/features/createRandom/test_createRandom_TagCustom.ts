import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagCustom } from "../../structures/TagCustom";

export const test_createRandom_TagCustom = _test_random(
    "TagCustom",
    typia.createRandom<TagCustom>(TagCustom.RANDOM),
    typia.createAssert<TagCustom>(),
);
