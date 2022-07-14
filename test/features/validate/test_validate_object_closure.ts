import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_validate } from "./_test_validate";

export const test_validate_object_closure = _test_validate(
    "closured object",
    ObjectClosure.generate,
    (input) => TSON.validate(input),
    // [
    //     (input) => {
    //         input.id = null!;
    //         return ["$input.id"];
    //     },
    //     (input) => {
    //         input.open = {} as any;
    //         return ["$input.open"];
    //     },
    // ],
);
