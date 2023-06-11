import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_createIsStringify_ObjectSimple = _test_isStringify(
    "ObjectSimple",
    ObjectSimple.generate,
    typia.createIsStringify<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
