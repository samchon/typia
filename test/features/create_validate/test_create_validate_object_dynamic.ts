import TSON from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_object_dynamic = _test_validate(
    "dynamicd object",
    ObjectDynamic.generate,
    TSON.createValidate<ObjectDynamic>(),
    ObjectDynamic.SPOILERS,
);
