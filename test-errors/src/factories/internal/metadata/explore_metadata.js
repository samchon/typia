"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.explore_metadata = void 0;
const Metadata_1 = require("../../../schemas/metadata/Metadata");
const emend_metadata_atomics_1 = require("./emend_metadata_atomics");
const iterate_metadata_1 = require("./iterate_metadata");
const explore_metadata = (checker) => (options) => (collection) => (errors) => (type, explore) => {
    // CONSTRUCT METADATA
    const meta = Metadata_1.Metadata.initialize(explore.escaped);
    if (type === null)
        return meta;
    // ITERATE TYPESCRIPT TYPES
    (0, iterate_metadata_1.iterate_metadata)(checker)(options)(collection)(errors)(meta, type, explore);
    (0, emend_metadata_atomics_1.emend_metadata_atomics)(meta);
    if (meta.escaped) {
        (0, emend_metadata_atomics_1.emend_metadata_atomics)(meta.escaped.original);
        (0, emend_metadata_atomics_1.emend_metadata_atomics)(meta.escaped.returns);
    }
    return meta;
};
exports.explore_metadata = explore_metadata;
