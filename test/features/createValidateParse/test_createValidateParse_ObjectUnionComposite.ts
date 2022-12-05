import TSON from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectUnionComposite =
    _test_validateParse(
        "ObjectUnionComposite",
        ObjectUnionComposite.generate,
        TSON.createValidateParse<ObjectUnionComposite>(),
        ObjectUnionComposite.SPOILERS,
    );
