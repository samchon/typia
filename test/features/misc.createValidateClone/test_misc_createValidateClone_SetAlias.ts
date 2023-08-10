import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { SetAlias } from "../../structures/SetAlias";

export const test_misc_validateClone_SetAlias =
    _test_misc_validateClone<SetAlias>(SetAlias)(
        typia.misc.createValidateClone<SetAlias>(),
    );
