import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { IArrayAtomic } from "../../structures/IArrayAtomic";
import { _test_stringify } from "./_test_stringify";

export function test_stringify_array_atomic(): void {
    _test_stringify(
        "atomic array",
        IArrayAtomic.generate(RandomGenerator.boolean),
        (input) => TSON.stringify(input),
    )();

    _test_stringify(
        "atomic array",
        IArrayAtomic.generate(RandomGenerator.number),
        (input) => TSON.stringify(input),
    )();

    _test_stringify(
        "atomic array",
        IArrayAtomic.generate(RandomGenerator.string),
        (input) => TSON.stringify(input),
    )();
}
