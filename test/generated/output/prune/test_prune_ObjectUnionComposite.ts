import typia from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_prune } from "../internal/_test_prune";
export const test_prune_ObjectUnionComposite = _test_prune("ObjectUnionComposite", ObjectUnionComposite.generate, (input) => ((input: ObjectUnionComposite): void => {
    const $io0 = (input: any) => "number" === typeof input.x && "number" === typeof input.y;
    const $io1 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2));
    const $io2 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io0(input.p3));
    const $io3 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io0(input.p3)) && ("object" === typeof input.p4 && null !== input.p4 && $io0(input.p4));
    const $io4 = (input: any) => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
    const $io5 = (input: any) => "object" === typeof input.outer && null !== input.outer && $io4(input.outer) && (Array.isArray(input.inner) && input.inner.every((elem: any) => "object" === typeof elem && null !== elem && $io4(elem)));
    const $io6 = (input: any) => Array.isArray(input.outer) && input.outer.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && ("object" === typeof input.inner && null !== input.inner && $io0(input.inner));
    const $io7 = (input: any) => "object" === typeof input.centroid && null !== input.centroid && $io0(input.centroid) && "number" === typeof input.radius;
    const $iu0 = (input: any) => (() => {
        if (undefined !== input.x)
            return $io0(input);
        if (undefined !== input.p4)
            return $io3(input);
        if (undefined !== input.points)
            return $io4(input);
        if ("object" === typeof input.outer && null !== input.outer && $io4(input.outer))
            return $io5(input);
        if (Array.isArray(input.outer) && input.outer.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)))
            return $io6(input);
        if (undefined !== input.centroid)
            return $io7(input);
        return (() => {
            if (undefined !== input.p3)
                return $io2(input);
            return $io1(input);
        })();
    })();
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("x" === key || "y" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any) => {
        if ("object" === typeof input.p1 && null !== input.p1)
            $po0(input.p1);
        if ("object" === typeof input.p2 && null !== input.p2)
            $po0(input.p2);
        for (const key of Object.keys(input)) {
            if ("p1" === key || "p2" === key)
                continue;
            delete input[key];
        }
    };
    const $po2 = (input: any) => {
        if ("object" === typeof input.p1 && null !== input.p1)
            $po0(input.p1);
        if ("object" === typeof input.p2 && null !== input.p2)
            $po0(input.p2);
        if ("object" === typeof input.p3 && null !== input.p3)
            $po0(input.p3);
        for (const key of Object.keys(input)) {
            if ("p1" === key || "p2" === key || "p3" === key)
                continue;
            delete input[key];
        }
    };
    const $po3 = (input: any) => {
        if ("object" === typeof input.p1 && null !== input.p1)
            $po0(input.p1);
        if ("object" === typeof input.p2 && null !== input.p2)
            $po0(input.p2);
        if ("object" === typeof input.p3 && null !== input.p3)
            $po0(input.p3);
        if ("object" === typeof input.p4 && null !== input.p4)
            $po0(input.p4);
        for (const key of Object.keys(input)) {
            if ("p1" === key || "p2" === key || "p3" === key || "p4" === key)
                continue;
            delete input[key];
        }
    };
    const $po4 = (input: any) => {
        if (Array.isArray(input.points))
            input.points.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem)
                    $po0(elem);
            });
        for (const key of Object.keys(input)) {
            if ("points" === key)
                continue;
            delete input[key];
        }
    };
    const $po5 = (input: any) => {
        if ("object" === typeof input.outer && null !== input.outer)
            $po4(input.outer);
        if (Array.isArray(input.inner))
            input.inner.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem)
                    $po4(elem);
            });
        for (const key of Object.keys(input)) {
            if ("outer" === key || "inner" === key)
                continue;
            delete input[key];
        }
    };
    const $po6 = (input: any) => {
        if (Array.isArray(input.outer))
            input.outer.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem)
                    $po0(elem);
            });
        if ("object" === typeof input.inner && null !== input.inner)
            $po0(input.inner);
        for (const key of Object.keys(input)) {
            if ("outer" === key || "inner" === key)
                continue;
            delete input[key];
        }
    };
    const $po7 = (input: any) => {
        if ("object" === typeof input.centroid && null !== input.centroid)
            $po0(input.centroid);
        for (const key of Object.keys(input)) {
            if ("centroid" === key || "radius" === key)
                continue;
            delete input[key];
        }
    };
    const $pu0 = (input: any) => (() => {
        if (undefined !== input.x)
            return $po0(input);
        if (undefined !== input.p4)
            return $po3(input);
        if (undefined !== input.points)
            return $po4(input);
        if ("object" === typeof input.outer && null !== input.outer && $io4(input.outer))
            return $po5(input);
        if (Array.isArray(input.outer) && input.outer.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)))
            return $po6(input);
        if (undefined !== input.centroid)
            return $po7(input);
        return (() => {
            if (undefined !== input.p3)
                return $po2(input);
            return $po1(input);
        })();
    })();
    if (Array.isArray(input))
        input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem)
                $pu0(elem);
        });
})(input));
