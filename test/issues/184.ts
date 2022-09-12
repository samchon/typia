import TSON from "../../src/index";

const value: string | number = "something" as any;
if (TSON.is<string>(value)) {
    TSON.is(value);
}
