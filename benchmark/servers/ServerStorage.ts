import { ArrayHierarchical } from "../../test/structures/ArrayHierarchical";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnionExplicit } from "../../test/structures/ArrayRecursiveUnionExplicit";
import { ArraySimple } from "../../test/structures/ArraySimple";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectSimple } from "../../test/structures/ObjectSimple";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";

const repeat = <T>(generator: () => T) =>
    new Array(100).fill("").map(generator);
const failure = <T>(generator: () => T, trail: () => T) => {
    const data: T[] = repeat(generator);
    data.push(trail());
    return data;
};

export const ServerStorage = (success: boolean) => {
    const wrapper = success ? repeat : failure;
    return {
        ObjectSimple: wrapper(ObjectSimple.generate, ObjectSimple.trail),
        ObjectHierarchical: wrapper(
            ObjectHierarchical.generate,
            ObjectHierarchical.trail,
        ),
        ObjectRecursive: wrapper(
            ObjectRecursive.generate,
            ObjectRecursive.trail,
        ),
        ObjectUnionExplicit: wrapper(
            ObjectUnionExplicit.generate,
            ObjectUnionExplicit.trail,
        ),
        ArraySimple: wrapper(ArraySimple.generate, ArraySimple.trail),
        ArrayHierarchical: wrapper(
            ArrayHierarchical.generate,
            ArrayHierarchical.trail,
        ),
        ArrayRecursive: wrapper(ArrayRecursive.generate, ArrayRecursive.trail),
        ArrayRecursiveUnionExplicit: wrapper(
            ArrayRecursiveUnionExplicit.generate,
            ArrayRecursiveUnionExplicit.trail,
        ),
    };
};
