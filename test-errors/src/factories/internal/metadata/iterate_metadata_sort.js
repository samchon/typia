"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterate_metadata_sort = void 0;
const Metadata_1 = require("../../../schemas/metadata/Metadata");
const MetadataObject_1 = require("../../../schemas/metadata/MetadataObject");
const iterate_metadata_sort = (collection) => (meta) => {
    const visited = new Set();
    for (const array of collection.arrays())
        iterate(visited)(collection)(array.value);
    for (const tuple of collection.tuples())
        for (const element of tuple.elements)
            iterate(visited)(collection)(element);
    for (const object of collection.objects())
        for (const property of object.properties)
            iterate(visited)(collection)(property.value);
    iterate(visited)(collection)(meta);
};
exports.iterate_metadata_sort = iterate_metadata_sort;
const iterate = (visited) => (collection) => (meta) => {
    if (visited.has(meta))
        return;
    visited.add(meta);
    // ITERATE CHILDREN
    for (const map of meta.maps)
        iterate(visited)(collection)(map.value);
    for (const set of meta.sets)
        iterate(visited)(collection)(set);
    if (meta.escaped !== null)
        iterate(visited)(collection)(meta.escaped.returns);
    if (meta.rest !== null)
        iterate(visited)(collection)(meta.rest);
    // SORT OBJECTS
    if (meta.objects.length > 1) {
        meta.objects.sort((x, y) => MetadataObject_1.MetadataObject.covers(x, y)
            ? -1
            : MetadataObject_1.MetadataObject.covers(y, x)
                ? 1
                : 0);
        meta.union_index = collection.getUnionIndex(meta);
    }
    // SORT ARRAYS AND TUPLES
    if (meta.arrays.length > 1)
        meta.arrays.sort((x, y) => Metadata_1.Metadata.covers(x.type.value, y.type.value)
            ? -1
            : Metadata_1.Metadata.covers(y.type.value, x.type.value)
                ? 1
                : 0);
    if (meta.tuples.length > 1)
        meta.tuples.sort((x, y) => {
            const xt = Metadata_1.Metadata.initialize();
            const yt = Metadata_1.Metadata.initialize();
            xt.tuples.push(x);
            yt.tuples.push(y);
            return Metadata_1.Metadata.covers(xt, yt)
                ? -1
                : Metadata_1.Metadata.covers(yt, xt)
                    ? 1
                    : 0;
        });
};
