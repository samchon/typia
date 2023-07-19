import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_misc_validateClone_ToJsonTuple =
    _test_misc_validateClone<ToJsonTuple>(ToJsonTuple)(
        typia.misc.createValidateClone<ToJsonTuple>(),
    );
