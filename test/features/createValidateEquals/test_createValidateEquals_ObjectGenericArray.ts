import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ObjectGenericArray =
    _test_validateEquals(
        "ObjectGenericArray",
        ObjectGenericArray.generate,
        TSON.createValidateEquals<ObjectGenericArray>(),
    );
