import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_validate } from "./_test_validate";

export const test_validate_tag_object_union = _test_validate(
    "object union tag",
    TagObjectUnion.generate,
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
