import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";

export const test_createIsClone_ObjectUnionComposite = _test_isClone(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input: any): typia.Primitive<ObjectUnionComposite> | null => {
        const is: any = (input: any): input is ObjectUnionComposite => {
            const $io0: any = (input: any): boolean =>
                "number" === typeof input.x &&
                Number.isFinite(input.x) &&
                "number" === typeof input.y &&
                Number.isFinite(input.y);
            const $io1: any = (input: any): boolean =>
                "object" === typeof input.p1 &&
                null !== input.p1 &&
                "number" === typeof input.p1.x &&
                Number.isFinite(input.p1.x) &&
                "number" === typeof input.p1.y &&
                Number.isFinite(input.p1.y) &&
                "object" === typeof input.p2 &&
                null !== input.p2 &&
                "number" === typeof input.p2.x &&
                Number.isFinite(input.p2.x) &&
                "number" === typeof input.p2.y &&
                Number.isFinite(input.p2.y);
            const $io2: any = (input: any): boolean =>
                "object" === typeof input.p1 &&
                null !== input.p1 &&
                "number" === typeof input.p1.x &&
                Number.isFinite(input.p1.x) &&
                "number" === typeof input.p1.y &&
                Number.isFinite(input.p1.y) &&
                "object" === typeof input.p2 &&
                null !== input.p2 &&
                "number" === typeof input.p2.x &&
                Number.isFinite(input.p2.x) &&
                "number" === typeof input.p2.y &&
                Number.isFinite(input.p2.y) &&
                "object" === typeof input.p3 &&
                null !== input.p3 &&
                "number" === typeof input.p3.x &&
                Number.isFinite(input.p3.x) &&
                "number" === typeof input.p3.y &&
                Number.isFinite(input.p3.y);
            const $io3: any = (input: any): boolean =>
                "object" === typeof input.p1 &&
                null !== input.p1 &&
                "number" === typeof input.p1.x &&
                Number.isFinite(input.p1.x) &&
                "number" === typeof input.p1.y &&
                Number.isFinite(input.p1.y) &&
                "object" === typeof input.p2 &&
                null !== input.p2 &&
                "number" === typeof input.p2.x &&
                Number.isFinite(input.p2.x) &&
                "number" === typeof input.p2.y &&
                Number.isFinite(input.p2.y) &&
                "object" === typeof input.p3 &&
                null !== input.p3 &&
                "number" === typeof input.p3.x &&
                Number.isFinite(input.p3.x) &&
                "number" === typeof input.p3.y &&
                Number.isFinite(input.p3.y) &&
                "object" === typeof input.p4 &&
                null !== input.p4 &&
                "number" === typeof input.p4.x &&
                Number.isFinite(input.p4.x) &&
                "number" === typeof input.p4.y &&
                Number.isFinite(input.p4.y);
            const $io4: any = (input: any): boolean =>
                Array.isArray(input.points) &&
                input.points.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                );
            const $io5: any = (input: any): boolean =>
                "object" === typeof input.outer &&
                null !== input.outer &&
                $io4(input.outer) &&
                Array.isArray(input.inner) &&
                input.inner.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io4(elem),
                );
            const $io6: any = (input: any): boolean =>
                Array.isArray(input.outer) &&
                input.outer.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                ) &&
                "object" === typeof input.inner &&
                null !== input.inner &&
                "number" === typeof input.inner.x &&
                Number.isFinite(input.inner.x) &&
                "number" === typeof input.inner.y &&
                Number.isFinite(input.inner.y);
            const $io7: any = (input: any): boolean =>
                "object" === typeof input.centroid &&
                null !== input.centroid &&
                "number" === typeof input.centroid.x &&
                Number.isFinite(input.centroid.x) &&
                "number" === typeof input.centroid.y &&
                Number.isFinite(input.centroid.y) &&
                "number" === typeof input.radius &&
                Number.isFinite(input.radius);
            const $iu0: any = (input: any): any =>
                (() => {
                    if (undefined !== input.x) return $io0(input);
                    if (undefined !== input.p4) return $io3(input);
                    if (undefined !== input.points) return $io4(input);
                    if (
                        Array.isArray(input.outer) &&
                        input.outer.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem),
                        )
                    )
                        return $io6(input);
                    if (
                        "object" === typeof input.outer &&
                        null !== input.outer &&
                        $io4(input.outer)
                    )
                        return $io5(input);
                    if (undefined !== input.centroid) return $io7(input);
                    return (() => {
                        if (undefined !== input.p3) return $io2(input);
                        return $io1(input);
                    })();
                })();
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $iu0(elem),
                )
            );
        };
        const clone: any = (
            input: ObjectUnionComposite,
        ): typia.Primitive<ObjectUnionComposite> => {
            const $io0: any = (input: any): boolean =>
                "number" === typeof input.x && "number" === typeof input.y;
            const $io1: any = (input: any): boolean =>
                "object" === typeof input.p1 &&
                null !== input.p1 &&
                $io0(input.p1) &&
                "object" === typeof input.p2 &&
                null !== input.p2 &&
                $io0(input.p2);
            const $io2: any = (input: any): boolean =>
                "object" === typeof input.p1 &&
                null !== input.p1 &&
                $io0(input.p1) &&
                "object" === typeof input.p2 &&
                null !== input.p2 &&
                $io0(input.p2) &&
                "object" === typeof input.p3 &&
                null !== input.p3 &&
                $io0(input.p3);
            const $io3: any = (input: any): boolean =>
                "object" === typeof input.p1 &&
                null !== input.p1 &&
                $io0(input.p1) &&
                "object" === typeof input.p2 &&
                null !== input.p2 &&
                $io0(input.p2) &&
                "object" === typeof input.p3 &&
                null !== input.p3 &&
                $io0(input.p3) &&
                "object" === typeof input.p4 &&
                null !== input.p4 &&
                $io0(input.p4);
            const $io4: any = (input: any): boolean =>
                Array.isArray(input.points) &&
                input.points.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                );
            const $io5: any = (input: any): boolean =>
                "object" === typeof input.outer &&
                null !== input.outer &&
                $io4(input.outer) &&
                Array.isArray(input.inner) &&
                input.inner.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io4(elem),
                );
            const $io6: any = (input: any): boolean =>
                Array.isArray(input.outer) &&
                input.outer.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                ) &&
                "object" === typeof input.inner &&
                null !== input.inner &&
                $io0(input.inner);
            const $io7: any = (input: any): boolean =>
                "object" === typeof input.centroid &&
                null !== input.centroid &&
                $io0(input.centroid) &&
                "number" === typeof input.radius;
            const $co0: any = (input: any): any => ({
                x: input.x as any,
                y: input.y as any,
            });
            const $co1: any = (input: any): any => ({
                p1:
                    "object" === typeof input.p1 && null !== input.p1
                        ? $co0(input.p1)
                        : (input.p1 as any),
                p2:
                    "object" === typeof input.p2 && null !== input.p2
                        ? $co0(input.p2)
                        : (input.p2 as any),
            });
            const $co2: any = (input: any): any => ({
                p1:
                    "object" === typeof input.p1 && null !== input.p1
                        ? $co0(input.p1)
                        : (input.p1 as any),
                p2:
                    "object" === typeof input.p2 && null !== input.p2
                        ? $co0(input.p2)
                        : (input.p2 as any),
                p3:
                    "object" === typeof input.p3 && null !== input.p3
                        ? $co0(input.p3)
                        : (input.p3 as any),
            });
            const $co3: any = (input: any): any => ({
                p1:
                    "object" === typeof input.p1 && null !== input.p1
                        ? $co0(input.p1)
                        : (input.p1 as any),
                p2:
                    "object" === typeof input.p2 && null !== input.p2
                        ? $co0(input.p2)
                        : (input.p2 as any),
                p3:
                    "object" === typeof input.p3 && null !== input.p3
                        ? $co0(input.p3)
                        : (input.p3 as any),
                p4:
                    "object" === typeof input.p4 && null !== input.p4
                        ? $co0(input.p4)
                        : (input.p4 as any),
            });
            const $co4: any = (input: any): any => ({
                points: Array.isArray(input.points)
                    ? (() =>
                          input.points.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co0(elem)
                                  : (elem as any),
                          ))()
                    : (input.points as any),
            });
            const $co5: any = (input: any): any => ({
                outer:
                    "object" === typeof input.outer && null !== input.outer
                        ? $co4(input.outer)
                        : (input.outer as any),
                inner: Array.isArray(input.inner)
                    ? (() =>
                          input.inner.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co4(elem)
                                  : (elem as any),
                          ))()
                    : (input.inner as any),
            });
            const $co6: any = (input: any): any => ({
                outer: Array.isArray(input.outer)
                    ? (() =>
                          input.outer.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co0(elem)
                                  : (elem as any),
                          ))()
                    : (input.outer as any),
                inner:
                    "object" === typeof input.inner && null !== input.inner
                        ? $co0(input.inner)
                        : (input.inner as any),
            });
            const $co7: any = (input: any): any => ({
                centroid:
                    "object" === typeof input.centroid &&
                    null !== input.centroid
                        ? $co0(input.centroid)
                        : (input.centroid as any),
                radius: input.radius as any,
            });
            return Array.isArray(input)
                ? (() =>
                      input.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $cu0(elem)
                              : (elem as any),
                      ))()
                : (input as any);
        };
        if (!is(input)) return null;
        const output: any = clone(input);
        return output;
    },
    ObjectUnionComposite.SPOILERS,
);
