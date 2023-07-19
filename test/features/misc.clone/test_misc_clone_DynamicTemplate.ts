import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_misc_clone_DynamicTemplate =
    _test_misc_clone<DynamicTemplate>(DynamicTemplate)((input) =>
        typia.misc.clone(input),
    );
