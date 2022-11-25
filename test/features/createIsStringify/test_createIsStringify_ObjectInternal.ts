import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectInternal = _test_isStringify(
    "ObjectInternal",
    ObjectInternal.generate,
    TSON.createIsStringify<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);