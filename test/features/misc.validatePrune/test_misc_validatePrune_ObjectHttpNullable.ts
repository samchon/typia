import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_misc_validatePrune_ObjectHttpNullable =
    _test_misc_validatePrune("ObjectHttpNullable")<ObjectHttpNullable>(
        ObjectHttpNullable,
    )((input) => typia.misc.validatePrune<ObjectHttpNullable>(input));
