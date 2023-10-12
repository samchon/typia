import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_notation_createValidateSnake_ObjectHierarchical =
    _test_notation_validateGeneral("ObjectHierarchical")<ObjectHierarchical>(
        ObjectHierarchical,
    )<typia.SnakeCase<ObjectHierarchical>>({
        convert: typia.notations.createValidateSnake<ObjectHierarchical>(),
        assert: typia.createAssert<typia.SnakeCase<ObjectHierarchical>>(),
    });
