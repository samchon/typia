"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnionPredicator = void 0;
const Metadata_1 = require("../../schemas/metadata/Metadata");
const ArrayUtil_1 = require("../../utils/ArrayUtil");
const MapUtil_1 = require("../../utils/MapUtil");
var UnionPredicator;
(function (UnionPredicator) {
    UnionPredicator.object = (targets) => {
        // PROPERTY MATRIX
        const matrix = new Map();
        for (const obj of targets)
            for (const prop of obj.properties) {
                const key = prop.key.getSoleLiteral();
                if (key !== null)
                    MapUtil_1.MapUtil.take(matrix)(key, () => ArrayUtil_1.ArrayUtil.repeat(targets.length, () => null));
            }
        targets.forEach((obj, i) => {
            for (const prop of obj.properties) {
                const key = prop.key.getSoleLiteral();
                if (key !== null)
                    matrix.get(key)[i] = prop;
            }
        });
        // EXPLORE SPECIALIZERS
        const output = [];
        targets.forEach((obj, i) => {
            const children = [];
            obj.properties.forEach((prop) => {
                // MUST BE REQUIRED
                if (prop.value.isRequired() === false)
                    return;
                const key = prop.key.getSoleLiteral();
                if (key === null)
                    return;
                // FIND NEIGHBORHOOD PROPERTIES
                const neighbors = matrix
                    .get(key)
                    .filter((oppo, k) => i !== k && oppo !== null);
                // NO NEIGHBORHOOD
                const unique = neighbors.length === 0 ||
                    neighbors.every((n) => !Metadata_1.Metadata.intersects(prop.value, n.value));
                if (unique === true)
                    children.push({
                        property: prop,
                        neighbour: neighbors.length !== 0,
                    });
            });
            if (children.length === 0)
                return;
            const top = children.find((child) => child.property.value.isConstant()) ||
                children[0];
            output.push({
                index: i,
                object: obj,
                ...top,
            });
        });
        return output;
    };
})(UnionPredicator || (exports.UnionPredicator = UnionPredicator = {}));
