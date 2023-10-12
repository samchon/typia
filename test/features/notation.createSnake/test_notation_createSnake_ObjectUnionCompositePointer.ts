import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_notation_createValidateSnake_ObjectUnionCompositePointer =
    _test_notation_validateGeneral(
        "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)<
        typia.SnakeCase<ObjectUnionCompositePointer>
    >({
        convert:
            typia.notations.createValidateSnake<ObjectUnionCompositePointer>(),
        assert: typia.createAssert<
            typia.SnakeCase<ObjectUnionCompositePointer>
        >(),
    });
