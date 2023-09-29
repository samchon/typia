import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_createValidateEquals_ObjectPartialAndRequired =
    _test_validateEquals("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
        ObjectPartialAndRequired,
    )(typia.createValidateEquals<ObjectPartialAndRequired>());
