import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_misc_clone_ObjectUnionExplicit =
    _test_misc_clone<ObjectUnionExplicit>(ObjectUnionExplicit)(
        (input: ObjectUnionExplicit): typia.Primitive<ObjectUnionExplicit> => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.x &&
                "number" === typeof input.y &&
                "point" === input.type;
            const $io1 = (input: any): boolean =>
                "object" === typeof input.p1 &&
                null !== input.p1 &&
                $io2(input.p1) &&
                "object" === typeof input.p2 &&
                null !== input.p2 &&
                $io2(input.p2) &&
                "line" === input.type;
            const $io2 = (input: any): boolean =>
                "number" === typeof input.x && "number" === typeof input.y;
            const $io3 = (input: any): boolean =>
                "object" === typeof input.p1 &&
                null !== input.p1 &&
                $io2(input.p1) &&
                "object" === typeof input.p2 &&
                null !== input.p2 &&
                $io2(input.p2) &&
                "object" === typeof input.p3 &&
                null !== input.p3 &&
                $io2(input.p3) &&
                "triangle" === input.type;
            const $io4 = (input: any): boolean =>
                "object" === typeof input.p1 &&
                null !== input.p1 &&
                $io2(input.p1) &&
                "object" === typeof input.p2 &&
                null !== input.p2 &&
                $io2(input.p2) &&
                "object" === typeof input.p3 &&
                null !== input.p3 &&
                $io2(input.p3) &&
                "object" === typeof input.p4 &&
                null !== input.p4 &&
                $io2(input.p4) &&
                "rectangle" === input.type;
            const $io5 = (input: any): boolean =>
                Array.isArray(input.points) &&
                input.points.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                ) &&
                "polyline" === input.type;
            const $io6 = (input: any): boolean =>
                "object" === typeof input.outer &&
                null !== input.outer &&
                $io7(input.outer) &&
                Array.isArray(input.inner) &&
                input.inner.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io7(elem),
                ) &&
                "polygon" === input.type;
            const $io7 = (input: any): boolean =>
                Array.isArray(input.points) &&
                input.points.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                );
            const $io8 = (input: any): boolean =>
                "object" === typeof input.centroid &&
                null !== input.centroid &&
                $io2(input.centroid) &&
                "number" === typeof input.radius &&
                "circle" === input.type;
            const $throws = (typia.misc.createClone as any).throws;
            const $cp0 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $cu0(elem)
                        : (elem as any),
                );
            const $cp1 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $co2(elem)
                        : (elem as any),
                );
            const $cp2 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $co7(elem)
                        : (elem as any),
                );
            const $co0 = (input: any): any => ({
                x: input.x as any,
                y: input.y as any,
                type: input.type as any,
            });
            const $co1 = (input: any): any => ({
                p1:
                    "object" === typeof input.p1 && null !== input.p1
                        ? $co2(input.p1)
                        : (input.p1 as any),
                p2:
                    "object" === typeof input.p2 && null !== input.p2
                        ? $co2(input.p2)
                        : (input.p2 as any),
                type: input.type as any,
            });
            const $co2 = (input: any): any => ({
                x: input.x as any,
                y: input.y as any,
            });
            const $co3 = (input: any): any => ({
                p1:
                    "object" === typeof input.p1 && null !== input.p1
                        ? $co2(input.p1)
                        : (input.p1 as any),
                p2:
                    "object" === typeof input.p2 && null !== input.p2
                        ? $co2(input.p2)
                        : (input.p2 as any),
                p3:
                    "object" === typeof input.p3 && null !== input.p3
                        ? $co2(input.p3)
                        : (input.p3 as any),
                type: input.type as any,
            });
            const $co4 = (input: any): any => ({
                p1:
                    "object" === typeof input.p1 && null !== input.p1
                        ? $co2(input.p1)
                        : (input.p1 as any),
                p2:
                    "object" === typeof input.p2 && null !== input.p2
                        ? $co2(input.p2)
                        : (input.p2 as any),
                p3:
                    "object" === typeof input.p3 && null !== input.p3
                        ? $co2(input.p3)
                        : (input.p3 as any),
                p4:
                    "object" === typeof input.p4 && null !== input.p4
                        ? $co2(input.p4)
                        : (input.p4 as any),
                type: input.type as any,
            });
            const $co5 = (input: any): any => ({
                points: Array.isArray(input.points)
                    ? $cp1(input.points)
                    : (input.points as any),
                type: input.type as any,
            });
            const $co6 = (input: any): any => ({
                outer:
                    "object" === typeof input.outer && null !== input.outer
                        ? $co7(input.outer)
                        : (input.outer as any),
                inner: Array.isArray(input.inner)
                    ? $cp2(input.inner)
                    : (input.inner as any),
                type: input.type as any,
            });
            const $co7 = (input: any): any => ({
                points: Array.isArray(input.points)
                    ? $cp1(input.points)
                    : (input.points as any),
            });
            const $co8 = (input: any): any => ({
                centroid:
                    "object" === typeof input.centroid &&
                    null !== input.centroid
                        ? $co2(input.centroid)
                        : (input.centroid as any),
                radius: input.radius as any,
                type: input.type as any,
            });
            const $cu0 = (input: any): any =>
                (() => {
                    if ("point" === input.type) return $co0(input);
                    else if ("line" === input.type) return $co1(input);
                    else if ("triangle" === input.type) return $co3(input);
                    else if ("rectangle" === input.type) return $co4(input);
                    else if ("polyline" === input.type) return $co5(input);
                    else if ("polygon" === input.type) return $co6(input);
                    else if ("circle" === input.type) return $co8(input);
                    else
                        $throws({
                            expected:
                                '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                            value: input,
                        });
                })();
            return Array.isArray(input) ? $cp0(input) : (input as any);
        },
    );
