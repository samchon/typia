import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_validateEquals_ObjectUnionExplicit =
    _test_validateEquals<ObjectUnionExplicit>(ObjectUnionExplicit)((input) =>
        typia.validateEquals(input),
    );
