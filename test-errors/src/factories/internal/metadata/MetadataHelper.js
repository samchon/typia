"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataHelper = void 0;
const Metadata_1 = require("../../../schemas/metadata/Metadata");
var MetadataHelper;
(function (MetadataHelper) {
    MetadataHelper.literal_to_metadata = (key) => {
        const metadata = Metadata_1.Metadata.initialize();
        metadata.constants.push({
            type: "string",
            values: [key],
        });
        return metadata;
    };
})(MetadataHelper || (exports.MetadataHelper = MetadataHelper = {}));
