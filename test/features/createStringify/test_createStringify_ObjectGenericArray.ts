import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createStringify_ObjectGenericArray = _test_stringify(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createStringify<ObjectGenericArray>(),
);
