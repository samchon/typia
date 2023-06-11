import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createValidateParse_ObjectUnionComposite =
    _test_validateParse(
        "ObjectUnionComposite",
        ObjectUnionComposite.generate,
        typia.createValidateParse<ObjectUnionComposite>(),
        ObjectUnionComposite.SPOILERS,
    );
