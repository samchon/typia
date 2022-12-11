import TSON from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_TupleRestObject = _test_stringify(
    "TupleRestObject",
    TupleRestObject.generate,
    TSON.createStringify<TupleRestObject>(),
);
