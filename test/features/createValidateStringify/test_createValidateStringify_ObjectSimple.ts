import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectSimple =
    _test_validateStringify(
        "ObjectSimple",
        ObjectSimple.generate,
        TSON.createValidateStringify<ObjectSimple>(),
        ObjectSimple.SPOILERS,
    );
