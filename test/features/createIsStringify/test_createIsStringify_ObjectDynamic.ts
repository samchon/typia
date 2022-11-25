import TSON from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectDynamic = _test_isStringify(
    "ObjectDynamic",
    ObjectDynamic.generate,
    TSON.createIsStringify<ObjectDynamic>(),
    ObjectDynamic.SPOILERS,
);
