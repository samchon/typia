import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_isClone_ObjectSimple = _test_isClone(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) =>
        ((input: any): typia.Primitive<ObjectSimple.IBox3D> | null => {
            const is: any = (input: any): input is ObjectSimple.IBox3D => {
                const $io0: any = (input: any): boolean =>
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
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const clone: any = (
                input: ObjectSimple.IBox3D,
            ): typia.Primitive<ObjectSimple.IBox3D> => {
                const $io1: any = (input: any): boolean =>
                    "number" === typeof input.x &&
                    "number" === typeof input.y &&
                    "number" === typeof input.z;
                const $co0: any = (input: any): any => ({
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
                        "object" === typeof input.rotate &&
                        null !== input.rotate
                            ? $co1(input.rotate)
                            : (input.rotate as any),
                    pivot:
                        "object" === typeof input.pivot && null !== input.pivot
                            ? $co1(input.pivot)
                            : (input.pivot as any),
                });
                const $co1: any = (input: any): any => ({
                    x: input.x as any,
                    y: input.y as any,
                    z: input.z as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output: any = clone(input);
            return output;
        })(input),
    ObjectSimple.SPOILERS,
);
