import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { IArrayAtomic } from "../../structures/IArrayAtomic";
import { _test_is } from "./_test_is";

export function test_array_is_atomic(): void {
    _test_is(
        "boolean array",
        IArrayAtomic.generate(RandomGenerator.boolean),
        (input) => TSON.is(input),
    );

    _test_is(
        "numeric array",
        IArrayAtomic.generate(RandomGenerator.number),
        (input) => TSON.is(input),
    );

    _test_is(
        "string array",
        IArrayAtomic.generate(RandomGenerator.string),
        (input) => TSON.is(input),
    );
}
