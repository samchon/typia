import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_createValidateParse_ObjectDynamic = _test_validateParse(
    "ObjectDynamic",
    ObjectDynamic.generate,
    typia.createValidateParse<ObjectDynamic>(),
    ObjectDynamic.SPOILERS,
);
