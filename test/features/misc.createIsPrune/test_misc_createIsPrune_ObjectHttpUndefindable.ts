import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_misc_createIsPrune_ObjectHttpUndefindable =
    _test_misc_isPrune("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
        ObjectHttpUndefindable,
    )(typia.misc.createIsPrune<ObjectHttpUndefindable>());
