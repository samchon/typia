import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_misc_isClone_ObjectSimple = _test_misc_isClone(
    "ObjectSimple",
)<ObjectSimple>(ObjectSimple)(
    (input: any): typia.Resolved<ObjectSimple> | null => {
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
        const clone = (input: ObjectSimple): typia.Resolved<ObjectSimple> => {
            const $io1 = (input: any): boolean =>
                "number" === typeof input.x &&
                "number" === typeof input.y &&
                "number" === typeof input.z;
            const $co0 = (input: any): any => ({
                scale:
                    "object" === typeof input.scale && null !== input.scale
                        ? $co1(input.scale)
                        : (input.scale as any),
                position:
                    "object" === typeof input.position &&
                    null !== input.position
                        ? $co1(input.position)
                        : (input.position as any),
                rotate:
                    "object" === typeof input.rotate && null !== input.rotate
                        ? $co1(input.rotate)
                        : (input.rotate as any),
                pivot:
                    "object" === typeof input.pivot && null !== input.pivot
                        ? $co1(input.pivot)
                        : (input.pivot as any),
            });
            const $co1 = (input: any): any => ({
                x: input.x as any,
                y: input.y as any,
                z: input.z as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    },
);
