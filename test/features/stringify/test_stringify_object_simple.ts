import TSON from "../../../src";
import { IObjectSimple } from "../../structures/IObjectSimple";
import { _test_stringify } from "./internal/_test_stringify";

export const test_stringify_object = _test_stringify(
    "simple object",
    IObjectSimple.generate(),
    (input) => TSON.stringify(input),
);
