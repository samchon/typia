import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectInternal =
    _test_validateStringify(
        "ObjectInternal",
        ObjectInternal.generate,
        TSON.createValidateStringify<ObjectInternal>(),
        ObjectInternal.SPOILERS,
    );
