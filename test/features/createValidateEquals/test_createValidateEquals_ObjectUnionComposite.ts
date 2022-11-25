import TSON from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ObjectUnionComposite =
    _test_validateEquals(
        "ObjectUnionComposite",
        ObjectUnionComposite.generate,
        TSON.createValidateEquals<ObjectUnionComposite>(),
    );
