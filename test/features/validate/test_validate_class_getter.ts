import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_validate } from "./_test_validate";

export const test_validate_class_getter = _test_validate(
    "class getter",
    ClassGetter.generate,
    (input) => TSON.validate(input),
    // [
    //     (input) => {
    //         (input as any).id = 3;
    //         return ["$input.id"];
    //     },
    //     (input) => {
    //         (input as any).name = null;
    //         return ["$input.name"];
    //     },
    //     (input) => {
    //         (input as any).dead = "alive";
    //         return ["$input.dead"];
    //     },
    // ],
);
