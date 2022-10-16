import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_object_internal = _test_validate_equals(
    "object internal",
    ObjectInternal.generate,
    (input) => TSON.validateEquals(input),
);
