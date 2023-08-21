import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagCustom } from "../../structures/TagCustom";

export const test_is_TagCustom = _test_is("TagCustom")<TagCustom>(TagCustom)(
    typia.createIs<TagCustom>(),
);
