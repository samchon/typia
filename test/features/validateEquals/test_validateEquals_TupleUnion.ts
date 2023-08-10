import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_validateEquals_TupleUnion = _test_validateEquals<TupleUnion>(
    TupleUnion,
)((input) => typia.validateEquals<TupleUnion>(input));
