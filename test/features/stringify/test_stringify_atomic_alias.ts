import TSON from "../../../src";
import { _test_stringify } from "./_test_stringify";

export function test_stringify_atomic_alias(): void {
    _test_stringify<Alias<boolean>>("atomic", true, (input) =>
        TSON.stringify(input),
    )();
    _test_stringify<Alias<boolean>>("atomic", false, (input) =>
        TSON.stringify(input),
    )();
    _test_stringify<Alias<number>>("atomic", 1, (input) =>
        TSON.stringify(input),
    )();
    _test_stringify<Alias<string>>("atomic", "something", (input) =>
        TSON.stringify(input),
    )();
    _test_stringify<Alias<null>>("atomic", null, (input) =>
        TSON.stringify(input),
    )();
}

type Alias<T> = T;
