import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_createStringify_ObjectSimple = _test_stringify(
    "ObjectSimple",
    ObjectSimple.generate,
    (input: ObjectSimple): string => {
        const $io1 = (input: any): boolean =>
            "number" === typeof input.x &&
            "number" === typeof input.y &&
            "number" === typeof input.z;
        const $number = (typia.createStringify as any).number;
        const $so0 = (input: any): any =>
            `{"scale":${`{"x":${$number((input.scale as any).x)},"y":${$number(
                (input.scale as any).y,
            )},"z":${$number(
                (input.scale as any).z,
            )}}`},"position":${`{"x":${$number(
                (input.position as any).x,
            )},"y":${$number((input.position as any).y)},"z":${$number(
                (input.position as any).z,
            )}}`},"rotate":${`{"x":${$number(
                (input.rotate as any).x,
            )},"y":${$number((input.rotate as any).y)},"z":${$number(
                (input.rotate as any).z,
            )}}`},"pivot":${`{"x":${$number(
                (input.pivot as any).x,
            )},"y":${$number((input.pivot as any).y)},"z":${$number(
                (input.pivot as any).z,
            )}}`}}`;
        return $so0(input);
    },
);
