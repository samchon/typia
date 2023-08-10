import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TagCustom } from "../../structures/TagCustom";

export const test_misc_clone_TagCustom = _test_misc_clone<TagCustom>(TagCustom)(
    typia.misc.createClone<TagCustom>(),
);