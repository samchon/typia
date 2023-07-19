import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_json_isStringify_ObjectSimple =
    _test_json_isStringify<ObjectSimple>(ObjectSimple)(
        (input: ObjectSimple): string | null => {
            const is = (input: any): input is ObjectSimple => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "object" === typeof (input as any).scale &&
                    null !== (input as any).scale &&
                    "number" === typeof ((input as any).scale as any).x &&
                    Number.isFinite(((input as any).scale as any).x) &&
                    "number" === typeof ((input as any).scale as any).y &&
                    Number.isFinite(((input as any).scale as any).y) &&
                    "number" === typeof ((input as any).scale as any).z &&
                    Number.isFinite(((input as any).scale as any).z) &&
                    "object" === typeof (input as any).position &&
                    null !== (input as any).position &&
                    "number" === typeof ((input as any).position as any).x &&
                    Number.isFinite(((input as any).position as any).x) &&
                    "number" === typeof ((input as any).position as any).y &&
                    Number.isFinite(((input as any).position as any).y) &&
                    "number" === typeof ((input as any).position as any).z &&
                    Number.isFinite(((input as any).position as any).z) &&
                    "object" === typeof (input as any).rotate &&
                    null !== (input as any).rotate &&
                    "number" === typeof ((input as any).rotate as any).x &&
                    Number.isFinite(((input as any).rotate as any).x) &&
                    "number" === typeof ((input as any).rotate as any).y &&
                    Number.isFinite(((input as any).rotate as any).y) &&
                    "number" === typeof ((input as any).rotate as any).z &&
                    Number.isFinite(((input as any).rotate as any).z) &&
                    "object" === typeof (input as any).pivot &&
                    null !== (input as any).pivot &&
                    "number" === typeof ((input as any).pivot as any).x &&
                    Number.isFinite(((input as any).pivot as any).x) &&
                    "number" === typeof ((input as any).pivot as any).y &&
                    Number.isFinite(((input as any).pivot as any).y) &&
                    "number" === typeof ((input as any).pivot as any).z &&
                    Number.isFinite(((input as any).pivot as any).z)
                );
            };
            const stringify = (input: ObjectSimple): string => {
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.x &&
                    "number" === typeof input.y &&
                    "number" === typeof input.z;
                const $number = (typia.json.createIsStringify as any).number;
                return `{"scale":${`{"x":${$number(
                    ((input as any).scale as any).x,
                )},"y":${$number(
                    ((input as any).scale as any).y,
                )},"z":${$number(
                    ((input as any).scale as any).z,
                )}}`},"position":${`{"x":${$number(
                    ((input as any).position as any).x,
                )},"y":${$number(
                    ((input as any).position as any).y,
                )},"z":${$number(
                    ((input as any).position as any).z,
                )}}`},"rotate":${`{"x":${$number(
                    ((input as any).rotate as any).x,
                )},"y":${$number(
                    ((input as any).rotate as any).y,
                )},"z":${$number(
                    ((input as any).rotate as any).z,
                )}}`},"pivot":${`{"x":${$number(
                    ((input as any).pivot as any).x,
                )},"y":${$number(
                    ((input as any).pivot as any).y,
                )},"z":${$number(((input as any).pivot as any).z)}}`}}`;
            };
            return is(input) ? stringify(input) : null;
        },
    );
