import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_is_ObjectGenericArray = _test_is<ObjectGenericArray>(
    ObjectGenericArray,
)((input) => typia.is<ObjectGenericArray>(input));
