import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_createClone_ObjectUnionExplicit = _test_clone(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input: ObjectUnionExplicit): typia.Primitive<ObjectUnionExplicit> => {
        const $io0: any = (input: any): boolean =>
            "number" === typeof input.x &&
            "number" === typeof input.y &&
            "point" === input.type;
        const $io1: any = (input: any): boolean =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            $io2(input.p1) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            $io2(input.p2) &&
            "line" === input.type;
        const $io2: any = (input: any): boolean =>
            "number" === typeof input.x && "number" === typeof input.y;
        const $io3: any = (input: any): boolean =>
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
        const $io4: any = (input: any): boolean =>
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
        const $io5: any = (input: any): boolean =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            ) &&
            "polyline" === input.type;
        const $io6: any = (input: any): boolean =>
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io7(input.outer) &&
            Array.isArray(input.inner) &&
            input.inner.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io7(elem),
            ) &&
            "polygon" === input.type;
        const $io7: any = (input: any): boolean =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            );
        const $io8: any = (input: any): boolean =>
            "object" === typeof input.centroid &&
            null !== input.centroid &&
            $io2(input.centroid) &&
            "number" === typeof input.radius &&
            "circle" === input.type;
        const $throws: any = (typia.createClone as any).throws;
        const $co0: any = (input: any): any => ({
            x: input.x as any,
            y: input.y as any,
            type: input.type as any,
        });
        const $co1: any = (input: any): any => ({
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
        const $co2: any = (input: any): any => ({
            x: input.x as any,
            y: input.y as any,
        });
        const $co3: any = (input: any): any => ({
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
        const $co4: any = (input: any): any => ({
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
        const $co5: any = (input: any): any => ({
            points: Array.isArray(input.points)
                ? (() =>
                      input.points.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co2(elem)
                              : (elem as any),
                      ))()
                : (input.points as any),
            type: input.type as any,
        });
        const $co6: any = (input: any): any => ({
            outer:
                "object" === typeof input.outer && null !== input.outer
                    ? $co7(input.outer)
                    : (input.outer as any),
            inner: Array.isArray(input.inner)
                ? (() =>
                      input.inner.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co7(elem)
                              : (elem as any),
                      ))()
                : (input.inner as any),
            type: input.type as any,
        });
        const $co7: any = (input: any): any => ({
            points: Array.isArray(input.points)
                ? (() =>
                      input.points.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co2(elem)
                              : (elem as any),
                      ))()
                : (input.points as any),
        });
        const $co8: any = (input: any): any => ({
            centroid:
                "object" === typeof input.centroid && null !== input.centroid
                    ? $co2(input.centroid)
                    : (input.centroid as any),
            radius: input.radius as any,
            type: input.type as any,
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
