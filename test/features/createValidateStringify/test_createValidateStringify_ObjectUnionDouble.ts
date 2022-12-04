import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectUnionDouble =
    _test_validateStringify(
        "ObjectUnionDouble",
        ObjectUnionDouble.generate,
        TSON.createValidateStringify<ObjectUnionDouble>(),
        ObjectUnionDouble.SPOILERS,
    );
