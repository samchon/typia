import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_misc_isPrune_DynamicTemplate =
    _test_misc_isPrune<DynamicTemplate>(DynamicTemplate)(
        typia.misc.createIsPrune<DynamicTemplate>(),
    );
