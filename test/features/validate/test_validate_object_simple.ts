import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_validate } from "./_test_validate";

export const test_validate_object_simple = _test_validate(
    "simple object",
    ObjectSimple.generate,
    (input) => TSON.validate(input),
    // [
    //     (input) => {
    //         input.scale.x = "number" as any;
    //         return ["$input.scale.x"];
    //     },
    //     (input) => {
    //         input.position = [] as any;
    //         return ["$input.position.x"];
    //     },
    //     (input) => {
    //         input.rotate = undefined!;
    //         return ["$input.rotate"];
    //     },
    //     (input) => {
    //         input.pivot = null!;
    //         return ["$input.pivot"];
    //     },
    // ],
);
