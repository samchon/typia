import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_validate } from "./_test_validate";

export const test_validate_array_union = _test_validate(
    "union arrray",
    ArrayUnion.generate,
    (input) => TSON.validate(input),
    // [
    //     (input) => (input[0] = [false, true, 3] as boolean[]) && true,
    //     (input) => (input[1] = [1, 2, false] as number[]) && true,
    //     (input) => (input[2] = ["a", "b", 3] as string[]) && true,
    //     (input) => (input[0] = [[]] as any) && true,
    //     (input) => (input[1] = [null!]) && true,
    // ],
);
