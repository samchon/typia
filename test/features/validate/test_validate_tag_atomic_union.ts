import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_validate } from "./_test_validate";

export const test_validate_tag_atomic_union = _test_validate(
    "atomic union tag",
    TagAtomicUnion.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            input[0].value = "12";
            return ["$input[0].value"];
        },
        (input) => {
            input[1].value = "12345678";
            return ["$input[1].value"];
        },
        (input) => {
            input[2].value = 2;
            return ["$input[2].value"];
        },
    ],
);
