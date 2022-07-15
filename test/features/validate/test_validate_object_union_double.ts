import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_validate } from "./_test_validate";

export const test_validate_object_union_double = _test_validate(
    "double union object",
    ObjectUnionDouble.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            input[0].value = "string" as any;
            return ["$input[0]"];
        },
        (input) => {
            input[1].child.value.y = "string" as any;
            return ["$input[1]"];
        },
        (input) => {
            input[2].child.value.y = 0 as any;
            return ["$input[2]"];
        },
        (input) => {
            input[3].child.value.y = false as any;
            return ["$input[3]"];
        },
    ],
);
