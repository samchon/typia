import typia from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectDynamic = _test_validate(
    "ObjectDynamic",
    ObjectDynamic.generate,
    typia.createValidate<ObjectDynamic>(),
    ObjectDynamic.SPOILERS,
);
