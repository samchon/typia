import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ObjectGenericArray = _test_stringify(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    TSON.createStringify<ObjectGenericArray>(),
);