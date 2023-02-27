import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_createIsStringify_ObjectSimple = _test_isStringify(
    "ObjectSimple",
    ObjectSimple.generate,
    (input: ObjectSimple): string | null => {
        const is = (input: any): input is ObjectSimple => {
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
        };
        const stringify = (input: ObjectSimple): string => {
            const $number = (typia.createIsStringify as any).number;
            const $io1 = (input: any): boolean =>
                "number" === typeof input.x &&
                "number" === typeof input.y &&
                "number" === typeof input.z;
            const $so0 = (input: any): any =>
                `{"scale":${`{"x":${$number(input.scale.x)},"y":${$number(
                    input.scale.y,
                )},"z":${$number(
                    input.scale.z,
                )}}`},"position":${`{"x":${$number(
                    input.position.x,
                )},"y":${$number(input.position.y)},"z":${$number(
                    input.position.z,
                )}}`},"rotate":${`{"x":${$number(input.rotate.x)},"y":${$number(
                    input.rotate.y,
                )},"z":${$number(input.rotate.z)}}`},"pivot":${`{"x":${$number(
                    input.pivot.x,
                )},"y":${$number(input.pivot.y)},"z":${$number(
                    input.pivot.z,
                )}}`}}`;
            return $so0(input);
        };
        return is(input) ? stringify(input) : null;
    },
    ObjectSimple.SPOILERS,
);
