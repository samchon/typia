import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_is } from "./_test_is";

export const test_is_object_optional = _test_is(
    "optional object",
    ObjectOptional.generate,
    (input) => TSON.is(input),
    [
        (input) => (input.id = 0 as any),
        (input) => (input.name = [] as any),
        (input) => (input.email = {} as any),
        (input) => (input.sequence = "0" as any),
    ],
);
