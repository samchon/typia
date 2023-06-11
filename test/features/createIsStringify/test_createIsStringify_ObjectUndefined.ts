import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createIsStringify_ObjectUndefined = _test_isStringify(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createIsStringify<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
