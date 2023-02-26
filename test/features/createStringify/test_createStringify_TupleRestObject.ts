import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createStringify_TupleRestObject = _test_stringify(
    "TupleRestObject",
    TupleRestObject.generate,
    typia.createStringify<TupleRestObject>(),
);
