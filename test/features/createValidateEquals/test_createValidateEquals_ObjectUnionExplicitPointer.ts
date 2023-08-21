import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_validateEquals_ObjectUnionExplicitPointer =
    _test_validateEquals(
        "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
        typia.createValidateEquals<ObjectUnionExplicitPointer>(),
    );
