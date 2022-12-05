import TSON from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ObjectUnionComposite =
    _test_validateClone(
        "ObjectUnionComposite",
        ObjectUnionComposite.generate,
        TSON.createValidateClone<ObjectUnionComposite>(),
        ObjectUnionComposite.SPOILERS,
    );
