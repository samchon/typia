import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createStringify_ObjectRecursive = _test_stringify(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createStringify<ObjectRecursive>(),
);
