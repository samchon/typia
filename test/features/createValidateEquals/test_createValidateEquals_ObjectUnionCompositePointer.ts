import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_validateEquals_ObjectUnionCompositePointer =
    _test_validateEquals(
        "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
        typia.createValidateEquals<ObjectUnionCompositePointer>(),
    );
