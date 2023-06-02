import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_createIsStringify_ObjectDynamic = _test_isStringify(
    "ObjectDynamic",
    ObjectDynamic.generate,
    typia.createIsStringify<ObjectDynamic>(),
    ObjectDynamic.SPOILERS,
);
