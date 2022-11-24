import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_create_validate_equals_object_internal =
    _test_validate_equals(
        "object internal",
        ObjectInternal.generate,
        TSON.createValidateEquals<ObjectInternal>(),
    );
