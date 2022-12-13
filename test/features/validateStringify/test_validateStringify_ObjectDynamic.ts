import typia from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectDynamic = _test_validateStringify(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => typia.validateStringify(input),
    ObjectDynamic.SPOILERS,
);