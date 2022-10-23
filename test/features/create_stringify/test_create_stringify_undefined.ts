import TSON from "../../../src";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_undefined = _test_stringify(
    "null",
    undefined,
    TSON.createStringify<typeof undefined>(),
    (json) => json === undefined,
);
