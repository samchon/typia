import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_validate } from "./_test_validate";

export const test_validate_object_generic = _test_validate(
    "generic object",
    ObjectGeneric.generate,
    (input) => TSON.validate(input),
    // [
    //     (input) => {
    //         input[0].value = 1 as any;
    //         return ["$input[0].value"];
    //     },
    //     (input) => {
    //         input[1].child.child_next = "something" as any;
    //         return ["$input[1].child.child_next"];
    //     },
    //     (input) => {
    //         input[2].elements[0] = true as any;
    //         return ["$input[2].elements[0]"];
    //     },
    //     (input) => {
    //         input[2].elements = {} as any;
    //         return ["$input[2].elements"];
    //     },
    // ],
);
