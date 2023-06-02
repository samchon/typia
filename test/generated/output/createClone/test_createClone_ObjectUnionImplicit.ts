import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_createClone_ObjectUnionImplicit = _test_clone(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input: ObjectUnionImplicit): typia.Primitive<ObjectUnionImplicit> => {
        const $io0: any = (input: any): boolean =>
            "number" === typeof input.x &&
            "number" === typeof input.y &&
            (null === input.slope ||
                undefined === input.slope ||
                "number" === typeof input.slope);
        const $io1: any = (input: any): boolean =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            $io0(input.p1) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            $io0(input.p2) &&
            (null === input.width ||
                undefined === input.width ||
                "number" === typeof input.width) &&
            (null === input.distance ||
                undefined === input.distance ||
                "number" === typeof input.distance);
        const $io2: any = (input: any): boolean =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            $io0(input.p1) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            $io0(input.p2) &&
            "object" === typeof input.p3 &&
            null !== input.p3 &&
            $io0(input.p3) &&
            (null === input.width ||
                undefined === input.width ||
                "number" === typeof input.width) &&
            (null === input.height ||
                undefined === input.height ||
                "number" === typeof input.height) &&
            (null === input.area ||
                undefined === input.area ||
                "number" === typeof input.area);
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
            $io0(input.p4) &&
            (null === input.width ||
                undefined === input.width ||
                "number" === typeof input.width) &&
            (null === input.height ||
                undefined === input.height ||
                "number" === typeof input.height) &&
            (null === input.area ||
                undefined === input.area ||
                "number" === typeof input.area);
        const $io4: any = (input: any): boolean =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io0(elem),
            ) &&
            (null === input.length ||
                undefined === input.length ||
                "number" === typeof input.length);
        const $io5: any = (input: any): boolean =>
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io4(input.outer) &&
            (undefined === input.inner ||
                (Array.isArray(input.inner) &&
                    input.inner.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io4(elem),
                    ))) &&
            (null === input.area ||
                undefined === input.area ||
                "number" === typeof input.area);
        const $io6: any = (input: any): boolean =>
            (undefined === input.centroid ||
                ("object" === typeof input.centroid &&
                    null !== input.centroid &&
                    $io0(input.centroid))) &&
            "number" === typeof input.radius &&
            (null === input.area ||
                undefined === input.area ||
                "number" === typeof input.area);
        const $co0: any = (input: any): any => ({
            x: input.x as any,
            y: input.y as any,
            slope: input.slope as any,
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
            width: input.width as any,
            distance: input.distance as any,
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
            width: input.width as any,
            height: input.height as any,
            area: input.area as any,
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
            width: input.width as any,
            height: input.height as any,
            area: input.area as any,
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
            length: input.length as any,
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
            area: input.area as any,
        });
        const $co6: any = (input: any): any => ({
            centroid:
                "object" === typeof input.centroid && null !== input.centroid
                    ? $co0(input.centroid)
                    : (input.centroid as any),
            radius: input.radius as any,
            area: input.area as any,
        });
        return Array.isArray(input)
            ? (() =>
                  input.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $cu0(elem)
                          : (elem as any),
                  ))()
            : (input as any);
    },
);
