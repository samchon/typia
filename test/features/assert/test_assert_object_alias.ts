import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assert_for_of } from "./_test_assert_for_of";

export const test_assert_object_alias = _test_assert_for_of(
    "aliased object",
    ObjectAlias.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input.id = {} as any;
            return "$input.id";
        },
        (input) => {
            input.email = { value: "email" } as any;
            return "$input.email";
        },
        (input) => {
            input.name = null!;
            return "$input.name";
        },
        (input) => {
            input.sex = 3 as 2;
            return "$input"; // @todo
        },
        (input) => {
            input.age = "old" as any;
            return "$input.age";
        },
        (input) => {
            input.dead = 1 as any;
            return "$input.dead";
        },
    ],
);
