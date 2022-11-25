import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_object_optional = _test_stringify(
    "optional object",
    ObjectOptional.generate,
    (input) => TSON.stringify(input),
);
