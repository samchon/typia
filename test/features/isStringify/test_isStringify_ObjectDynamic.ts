import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_isStringify_ObjectDynamic = _test_isStringify(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => typia.isStringify(input),
    ObjectDynamic.SPOILERS,
);
