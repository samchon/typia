import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_validate } from "./_test_validate";

export const test_validate_object_undefined = _test_validate(
    "undefined object",
    ObjectUndefied.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            input[0].professor = null!;
            return ["$input[0].professor"];
        },
        (input) => {
            input[0].classroom = [] as any;
            return ["$input[0].classroom.id"];
        },
        (input) => {
            input[0].nothing = "undefined" as any;
            return ["$input[0].nothing"];
        },
    ],
);
