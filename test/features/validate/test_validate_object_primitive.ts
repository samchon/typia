import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_validate } from "./_test_validate";

export const test_validate_object_primitive = _test_validate(
    "primitive object",
    ObjectPrimitive.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            input.id = null!;
            return ["$input.id"];
        },
        (input) => {
            input.extension = "jpg" as "md";
            return ["$input.extension"];
        },
        (input) => {
            input.files = {} as any;
            return ["$input.files"];
        },
        (input) => {
            input.files[0].created_at = new Date() as any;
            return ["$input.files[0].created_at"];
        },
    ],
);
