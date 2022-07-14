import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_validate } from "./_test_validate";

export const test_validate_object_intersection = _test_validate(
    "intersected object",
    ObjectIntersection.generate,
    (input) => TSON.validate(input),
    // [
    //     (input) => {
    //         input.email = { value: "email" } as any;
    //         return ["$input.email"];
    //     },
    //     (input) => {
    //         input.name = [] as any;
    //         return ["$input.name"];
    //     },
    //     (input) => {
    //         input.vulnerable = 1 as any;
    //         return ["$input.vulnerable"];
    //     },
    // ],
);
