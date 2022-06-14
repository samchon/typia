import TSON from "../../../src";
import { _test_stringify } from "./_test_stringify";

export function test_stringify_atomic(): void {
    _test_stringify("atomic", true, (input) => TSON.stringify(input))();
    _test_stringify("atomic", false, (input) => TSON.stringify(input))();
    _test_stringify("atomic", 1, (input) => TSON.stringify(input))();
    _test_stringify("atomic", "something", (input) => TSON.stringify(input))();
    _test_stringify("atomic", null, (input) => TSON.stringify(input))();
}
