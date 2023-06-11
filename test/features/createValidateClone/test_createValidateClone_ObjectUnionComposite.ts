import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createValidateClone_ObjectUnionComposite =
    _test_validateClone(
        "ObjectUnionComposite",
        ObjectUnionComposite.generate,
        typia.createValidateClone<ObjectUnionComposite>(),
        ObjectUnionComposite.SPOILERS,
    );
