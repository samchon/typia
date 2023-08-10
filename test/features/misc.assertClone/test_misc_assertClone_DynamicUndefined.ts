import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_misc_assertClone_DynamicUndefined =
    _test_misc_assertClone<DynamicUndefined>(DynamicUndefined)((input) =>
        typia.misc.assertClone<DynamicUndefined>(input),
    );
