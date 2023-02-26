import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_validateParse_ObjectDynamic = _test_validateParse(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => typia.validateParse<ObjectDynamic>(input),
    ObjectDynamic.SPOILERS,
);
