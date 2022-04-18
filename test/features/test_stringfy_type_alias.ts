import TSON from "../../src";

export function test_stringify_type_alias(): void
{
    TSON.stringify<Alias>(3);
}

type Alias = number;