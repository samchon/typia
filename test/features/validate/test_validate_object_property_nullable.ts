import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_validate } from "./_test_validate";

export const test_validate_object_property_nullable = _test_validate(
    "nullable object property",
    ObjectPropertyNullable.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            input[0][0].value = "boolean" as any;
            return ["$input[0][0].value"];
        },
        (input) => {
            input[1][0].value = "number" as any;
            return ["$input[1][0].value"];
        },
        (input) => {
            input[2][0].value = {} as any;
            return ["$input[2][0].value"];
        },
        (input) => {
            input[3][0].value = [] as any;
            return ["$input[3][0].value.id"];
        },
    ],
);
