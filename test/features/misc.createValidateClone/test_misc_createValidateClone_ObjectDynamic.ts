import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_misc_validateClone_ObjectDynamic =
    _test_misc_validateClone<ObjectDynamic>(ObjectDynamic)(
        typia.misc.createValidateClone<ObjectDynamic>(),
    );
