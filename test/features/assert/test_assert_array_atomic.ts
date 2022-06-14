import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { IArrayAtomic } from "../../structures/IArrayAtomic";
import { _test_assert } from "./_test_assert";

export function test_array_assert_atomic(): void {
    _test_assert(
        "boolean array",
        IArrayAtomic.generate(RandomGenerator.boolean),
        (input) => TSON.assert(input),
    );

    _test_assert(
        "numeric array",
        IArrayAtomic.generate(RandomGenerator.number),
        (input) => TSON.assert(input),
    );

    _test_assert(
        "string array",
        IArrayAtomic.generate(RandomGenerator.string),
        (input) => TSON.assert(input),
    );
}
