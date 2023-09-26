import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_createValidateEquals_ObjectHttpConstant =
    _test_validateEquals("ObjectHttpConstant")<ObjectHttpConstant>(
        ObjectHttpConstant,
    )(typia.createValidateEquals<ObjectHttpConstant>());
