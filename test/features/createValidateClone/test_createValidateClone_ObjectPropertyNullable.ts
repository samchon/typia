import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ObjectPropertyNullable =
    _test_validateClone(
        "ObjectPropertyNullable",
        ObjectPropertyNullable.generate,
        TSON.createValidateClone<ObjectPropertyNullable>(),
        ObjectPropertyNullable.SPOILERS,
    );
