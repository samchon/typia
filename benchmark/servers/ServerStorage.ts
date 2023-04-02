import { ArrayHierarchical } from "../../test/structures/ArrayHierarchical";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnionExplicit } from "../../test/structures/ArrayRecursiveUnionExplicit";
import { ArraySimple } from "../../test/structures/ArraySimple";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectSimple } from "../../test/structures/ObjectSimple";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";

const repeat = <T>(generator: () => T, count: number = 100) =>
    new Array(count).fill("").map(generator);

export const ServerStorage = () => {
    return {
        ObjectSimple: repeat(ObjectSimple.generate),
        ObjectHierarchical: repeat(ObjectHierarchical.generate),
        ObjectRecursive: repeat(ObjectRecursive.generate),
        ObjectUnionExplicit: repeat(ObjectUnionExplicit.generate),
        ArraySimple: repeat(ArraySimple.generate),
        ArrayHierarchical: repeat(ArrayHierarchical.generate),
        ArrayRecursive: repeat(ArrayRecursive.generate, 80),
        ArrayRecursiveUnionExplicit: repeat(
            ArrayRecursiveUnionExplicit.generate,
        ),
    };
};
