import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnionExplicit } from "../../test/structures/ArrayRecursiveUnionExplicit";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectSimple } from "../../test/structures/ObjectSimple";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";

const repeat = <T>(generator: () => T) =>
    new Array(100).fill("").map(generator);

export const ServerStorage = {
    ObjectSimple: repeat(ObjectSimple.generate),
    ObjectHierarchical: repeat(ObjectHierarchical.generate),
    ObjectRecursive: repeat(ObjectRecursive.generate),
    ObjectUnionExplicit: repeat(ObjectUnionExplicit.generate),
    ArrayRecursive: repeat(ArrayRecursive.generate),
    ArrayRecursiveUnionExplicit: repeat(ArrayRecursiveUnionExplicit.generate),
};
