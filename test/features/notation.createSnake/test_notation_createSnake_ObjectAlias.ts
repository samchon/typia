import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_notation_createValidateSnake_ObjectAlias =
    _test_notation_validateGeneral("ObjectAlias")<ObjectAlias>(ObjectAlias)<
        typia.SnakeCase<ObjectAlias>
    >({
        convert: typia.notations.createValidateSnake<ObjectAlias>(),
        assert: typia.createAssert<typia.SnakeCase<ObjectAlias>>(),
    });
