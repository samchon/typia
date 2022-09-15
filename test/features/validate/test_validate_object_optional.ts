import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_validate } from "./_test_validate";

export const test_validate_object_optional = _test_validate(
    "optional object",
    ObjectOptional.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            input.id = 0 as any;
            return ["$input.id"];
        },
        (input) => {
            input.name = [] as any;
            return ["$input.name"];
        },
        (input) => {
            input.email = {} as any;
            return ["$input.email"];
        },
        (input) => {
            input.sequence = "0" as any;
            return ["$input.sequence"];
        },
    ],
);
