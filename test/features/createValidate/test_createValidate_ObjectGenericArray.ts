import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectGenericArray = _test_validate(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    TSON.createValidate<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
