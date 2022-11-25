import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ObjectOptional = _test_equals(
    "ObjectOptional",
    ObjectOptional.generate,
    TSON.createEquals<ObjectOptional>(),
);
