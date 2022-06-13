import TSON from "../../../src";
import { _test_stringify } from "./internal/_test_stringify";

export function test_stringify_atomic_union(): void {
    const test = (value: string | number | boolean | null) =>
        _test_stringify("atomic union", value, (input) =>
            TSON.stringify(input),
        )();
    test(true);
    test(3);
    test("hello");
    test(null);
}
