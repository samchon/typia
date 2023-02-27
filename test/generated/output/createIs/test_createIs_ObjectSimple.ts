import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_createIs_ObjectSimple = _test_is(
    "ObjectSimple",
    ObjectSimple.generate,
    (input: any): input is ObjectSimple => {
        const $io0 = (input: any): boolean =>
            "object" === typeof input.scale &&
            null !== input.scale &&
            "number" === typeof input.scale.x &&
            Number.isFinite(input.scale.x) &&
            "number" === typeof input.scale.y &&
            Number.isFinite(input.scale.y) &&
            "number" === typeof input.scale.z &&
            Number.isFinite(input.scale.z) &&
            "object" === typeof input.position &&
            null !== input.position &&
            "number" === typeof input.position.x &&
            Number.isFinite(input.position.x) &&
            "number" === typeof input.position.y &&
            Number.isFinite(input.position.y) &&
            "number" === typeof input.position.z &&
            Number.isFinite(input.position.z) &&
            "object" === typeof input.rotate &&
            null !== input.rotate &&
            "number" === typeof input.rotate.x &&
            Number.isFinite(input.rotate.x) &&
            "number" === typeof input.rotate.y &&
            Number.isFinite(input.rotate.y) &&
            "number" === typeof input.rotate.z &&
            Number.isFinite(input.rotate.z) &&
            "object" === typeof input.pivot &&
            null !== input.pivot &&
            "number" === typeof input.pivot.x &&
            Number.isFinite(input.pivot.x) &&
            "number" === typeof input.pivot.y &&
            Number.isFinite(input.pivot.y) &&
            "number" === typeof input.pivot.z &&
            Number.isFinite(input.pivot.z);
        return "object" === typeof input && null !== input && $io0(input);
    },
    ObjectSimple.SPOILERS,
);
