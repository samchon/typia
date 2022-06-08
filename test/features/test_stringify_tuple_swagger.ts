import TSON from "../../src";

export function test_stringify_tuple_atomic(): void {
    TSON.createStringifier<Tuple>();
    TSON.createApplication<Tuple>();
}
type Tuple = [string, string, number];
