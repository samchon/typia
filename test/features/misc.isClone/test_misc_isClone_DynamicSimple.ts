import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_misc_isClone_DynamicSimple =
    _test_misc_isClone<DynamicSimple>(DynamicSimple)((input) =>
        typia.misc.isClone<DynamicSimple>(input),
    );
