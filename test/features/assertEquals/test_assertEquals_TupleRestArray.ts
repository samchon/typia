import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_assertEquals_TupleRestArray =
    _test_assertEquals<TupleRestArray>(TupleRestArray)((input) =>
        typia.assertEquals<TupleRestArray>(input),
    );
