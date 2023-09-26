import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createValidateEquals_ObjectGenericAlias =
    _test_validateEquals("ObjectGenericAlias")<ObjectGenericAlias>(
        ObjectGenericAlias,
    )(typia.createValidateEquals<ObjectGenericAlias>());
