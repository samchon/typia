import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_validateStringify_ObjectDynamic = _test_validateStringify(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => typia.validateStringify<ObjectDynamic>(input),
    ObjectDynamic.SPOILERS,
);
