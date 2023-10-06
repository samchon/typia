import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createValidateEquals_ObjectGenericArray =
    _test_validateEquals("ObjectGenericArray")<ObjectGenericArray>(
        ObjectGenericArray,
    )(typia.createValidateEquals<ObjectGenericArray>());
