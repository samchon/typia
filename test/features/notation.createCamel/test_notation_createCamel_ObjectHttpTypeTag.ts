import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_notation_createValidateCamel_ObjectHttpTypeTag =
    _test_notation_validateGeneral("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
        ObjectHttpTypeTag,
    )<typia.CamelCase<ObjectHttpTypeTag>>({
        convert: typia.notations.createValidateCamel<ObjectHttpTypeTag>(),
        assert: typia.createAssert<typia.CamelCase<ObjectHttpTypeTag>>(),
    });
