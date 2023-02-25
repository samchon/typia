import typia from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_ObjectUnionImplicit = _test_clone("ObjectUnionImplicit", ObjectUnionImplicit.generate, (input: ObjectUnionImplicit): typia.Primitive<ObjectUnionImplicit> => {
    const $io0 = (input: any) => "number" === typeof input.x && "number" === typeof input.y && (undefined === input.slope || "number" === typeof input.slope);
    const $io1 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && (undefined === input.width || "number" === typeof input.width) && (undefined === input.distance || "number" === typeof input.distance);
    const $io2 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io0(input.p3)) && (undefined === input.width || "number" === typeof input.width) && (undefined === input.height || "number" === typeof input.height) && (undefined === input.area || "number" === typeof input.area);
    const $io3 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io0(input.p3)) && ("object" === typeof input.p4 && null !== input.p4 && $io0(input.p4)) && (undefined === input.width || "number" === typeof input.width) && (undefined === input.height || "number" === typeof input.height) && (undefined === input.area || "number" === typeof input.area);
    const $io4 = (input: any) => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && (undefined === input.length || "number" === typeof input.length);
    const $io5 = (input: any) => "object" === typeof input.outer && null !== input.outer && $io4(input.outer) && (undefined === input.inner || Array.isArray(input.inner) && input.inner.every((elem: any) => "object" === typeof elem && null !== elem && $io4(elem))) && (undefined === input.area || "number" === typeof input.area);
    const $io6 = (input: any) => (undefined === input.centroid || "object" === typeof input.centroid && null !== input.centroid && $io0(input.centroid)) && "number" === typeof input.radius && (undefined === input.area || "number" === typeof input.area);
    const $iu0 = (input: any) => (() => {
        if (undefined !== input.x)
            return $io0(input);
        if (undefined !== input.p4)
            return $io3(input);
        if (undefined !== input.points)
            return $io4(input);
        if (undefined !== input.outer)
            return $io5(input);
        if (undefined !== input.radius)
            return $io6(input);
        return (() => {
            if (undefined !== input.p3)
                return $io2(input);
            return $io1(input);
        })();
    })();
    const $co0 = (input: any) => ({
        x: input.x,
        y: input.y,
        slope: input.slope
    });
    const $co1 = (input: any) => ({
        p1: "object" === typeof input.p1 && null !== input.p1 ? $co0(input.p1) : input.p1,
        p2: "object" === typeof input.p2 && null !== input.p2 ? $co0(input.p2) : input.p2,
        width: input.width,
        distance: input.distance
    });
    const $co2 = (input: any) => ({
        p1: "object" === typeof input.p1 && null !== input.p1 ? $co0(input.p1) : input.p1,
        p2: "object" === typeof input.p2 && null !== input.p2 ? $co0(input.p2) : input.p2,
        p3: "object" === typeof input.p3 && null !== input.p3 ? $co0(input.p3) : input.p3,
        width: input.width,
        height: input.height,
        area: input.area
    });
    const $co3 = (input: any) => ({
        p1: "object" === typeof input.p1 && null !== input.p1 ? $co0(input.p1) : input.p1,
        p2: "object" === typeof input.p2 && null !== input.p2 ? $co0(input.p2) : input.p2,
        p3: "object" === typeof input.p3 && null !== input.p3 ? $co0(input.p3) : input.p3,
        p4: "object" === typeof input.p4 && null !== input.p4 ? $co0(input.p4) : input.p4,
        width: input.width,
        height: input.height,
        area: input.area
    });
    const $co4 = (input: any) => ({
        points: Array.isArray(input.points) ? input.points.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input.points,
        length: input.length
    });
    const $co5 = (input: any) => ({
        outer: "object" === typeof input.outer && null !== input.outer ? $co4(input.outer) : input.outer,
        inner: Array.isArray(input.inner) ? input.inner.map((elem: any) => "object" === typeof elem && null !== elem ? $co4(elem) : elem) : input.inner,
        area: input.area
    });
    const $co6 = (input: any) => ({
        centroid: "object" === typeof input.centroid && null !== input.centroid ? $co0(input.centroid) : input.centroid,
        radius: input.radius,
        area: input.area
    });
    const $cu0 = (input: any) => (() => {
        if (undefined !== input.x)
            return $co0(input);
        if (undefined !== input.p4)
            return $co3(input);
        if (undefined !== input.points)
            return $co4(input);
        if (undefined !== input.outer)
            return $co5(input);
        if (undefined !== input.radius)
            return $co6(input);
        return (() => {
            if (undefined !== input.p3)
                return $co2(input);
            return $co1(input);
        })();
    })();
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $cu0(elem) : elem) : input;
});
