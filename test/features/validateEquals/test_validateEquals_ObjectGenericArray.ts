import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_validateEquals_ObjectGenericArray = _test_validateEquals(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) => typia.validateEquals<ObjectGenericArray>(input),
);
