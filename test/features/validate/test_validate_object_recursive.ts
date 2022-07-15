import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_validate } from "./_test_validate";

export const test_validate_object_recursive = _test_validate(
    "recursive object",
    ObjectRecursive.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            input.parent!.parent!.parent!.created_at.time = "zone" as any;
            return ["$input.parent.parent.parent.created_at.time"];
        },
    ],
);
