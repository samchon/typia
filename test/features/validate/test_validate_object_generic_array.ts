import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_validate } from "./_test_validate";

export const test_validate_object_generic_array = _test_validate(
    "generic arraied object",
    ObjectGenericArray.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            input.pagination.page = "one" as any;
            return ["$input.pagination.page"];
        },
        (input) => {
            input.pagination = null!;
            return ["$input.pagination"];
        },
        (input) => {
            input.pagination = [] as any;
            return ["$input.pagination.page"];
        },
        (input) => {
            input.data[0].name = null!;
            return ["$input.data[0].name"];
        },
        (input) => {
            input.data[1].age = "one" as any;
            return ["$input.data[1].age"];
        },
        (input) => {
            input.data[2] = null!;
            return ["$input.data[2]"];
        },
    ],
);
