import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_notation_createValidatePascal_TupleRestArray =
    _test_notation_validateGeneral("TupleRestArray")<TupleRestArray>(
        TupleRestArray,
    )<typia.PascalCase<TupleRestArray>>({
        convert: typia.notations.createValidatePascal<TupleRestArray>(),
        assert: typia.createAssert<typia.PascalCase<TupleRestArray>>(),
    });
