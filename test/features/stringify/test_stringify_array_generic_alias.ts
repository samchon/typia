import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { IArrayAtomic } from "../../structures/IArrayAtomic";
import { _test_stringify } from "./internal/_test_stringify";

export function test_stringify_array_generic_alias(): void {
    _test_stringify<Alias<boolean>>(
        "generic alias",
        IArrayAtomic.generate(RandomGenerator.boolean),
        (input) => TSON.stringify<Alias<boolean>>(input),
    )();

    _test_stringify<Alias<number>>(
        "generic alias",
        IArrayAtomic.generate(RandomGenerator.number),
        (input) => TSON.stringify<Alias<number>>(input),
    )();

    _test_stringify<Alias<string>>(
        "generic alias",
        IArrayAtomic.generate(RandomGenerator.string),
        (input) => TSON.stringify<Alias<string>>(input),
    )();
}

type Alias<T> = T[];
