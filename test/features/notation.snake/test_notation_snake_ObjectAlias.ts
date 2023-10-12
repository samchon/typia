import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_notation_validateSnake_ObjectAlias =
    _test_notation_validateGeneral("ObjectAlias")<ObjectAlias>(ObjectAlias)<
        typia.SnakeCase<ObjectAlias>
    >({
        convert: (input) => typia.notations.validateSnake<ObjectAlias>(input),
        assert: typia.createAssert<typia.SnakeCase<ObjectAlias>>(),
    });
