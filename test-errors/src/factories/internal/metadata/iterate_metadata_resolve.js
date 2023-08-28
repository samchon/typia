"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterate_metadata_resolve = void 0;
const Metadata_1 = require("../../../schemas/metadata/Metadata");
const MetadataEscaped_1 = require("../../../schemas/metadata/MetadataEscaped");
const Writable_1 = require("../../../typings/Writable");
const TypeFactory_1 = require("../../TypeFactory");
const iterate_metadata_1 = require("./iterate_metadata");
const iterate_metadata_resolve = (checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
    if (options.escape === false || explore.escaped === true)
        return false;
    const escaped = TypeFactory_1.TypeFactory.getReturnType(checker)(type)("toJSON");
    if (escaped === null)
        return false;
    if (meta.escaped === null) {
        (0, Writable_1.Writable)(meta).escaped = MetadataEscaped_1.MetadataEscaped.create({
            original: Metadata_1.Metadata.initialize(),
            returns: Metadata_1.Metadata.initialize(),
        });
    }
    (0, iterate_metadata_1.iterate_metadata)(checker)(options)(collection)(errors)(meta.escaped.original, type, {
        ...explore,
        escaped: true,
    });
    (0, iterate_metadata_1.iterate_metadata)(checker)(options)(collection)(errors)(meta.escaped.returns, escaped, {
        ...explore,
        escaped: true,
    });
    return true;
};
exports.iterate_metadata_resolve = iterate_metadata_resolve;
