import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_validateParse_ObjectUnionComposite = _test_validateParse(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.validateParse<ObjectUnionComposite>(input),
    ObjectUnionComposite.SPOILERS,
);
