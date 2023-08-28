"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterate_metadata = void 0;
const TypeFactory_1 = require("../../TypeFactory");
const iterate_metadata_alias_1 = require("./iterate_metadata_alias");
const iterate_metadata_array_1 = require("./iterate_metadata_array");
const iterate_metadata_atomic_1 = require("./iterate_metadata_atomic");
const iterate_metadata_coalesce_1 = require("./iterate_metadata_coalesce");
const iterate_metadata_constant_1 = require("./iterate_metadata_constant");
const iterate_metadata_intersection_1 = require("./iterate_metadata_intersection");
const iterate_metadata_map_1 = require("./iterate_metadata_map");
const iterate_metadata_native_1 = require("./iterate_metadata_native");
const iterate_metadata_object_1 = require("./iterate_metadata_object");
const iterate_metadata_resolve_1 = require("./iterate_metadata_resolve");
const iterate_metadata_set_1 = require("./iterate_metadata_set");
const iterate_metadata_template_1 = require("./iterate_metadata_template");
const iterate_metadata_tuple_1 = require("./iterate_metadata_tuple");
const iterate_metadata_union_1 = require("./iterate_metadata_union");
const iterate_metadata = (checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
    if (type.isTypeParameter() === true) {
        errors.push({
            name: TypeFactory_1.TypeFactory.getFullName(checker)(type),
            explore: { ...explore },
            messages: ["non-specified generic argument found."],
        });
        return;
    }
    // CHECK SPECIAL CASES
    else if ((explore.aliased !== true &&
        (0, iterate_metadata_alias_1.iterate_metadata_alias)(checker)(options)(collection)(errors)(meta, type, explore)) ||
        (0, iterate_metadata_intersection_1.iterate_metadata_intersection)(checker)(options)(collection)(errors)(meta, type, explore) ||
        (0, iterate_metadata_union_1.iterate_metadata_union)(checker)(options)(collection)(errors)(meta, type, explore) ||
        (0, iterate_metadata_resolve_1.iterate_metadata_resolve)(checker)(options)(collection)(errors)(meta, type, explore))
        return;
    // ITERATE CASES
    (0, iterate_metadata_coalesce_1.iterate_metadata_coalesce)(meta, type) ||
        (0, iterate_metadata_constant_1.iterate_metadata_constant)(checker)(options)(meta, type) ||
        (0, iterate_metadata_template_1.iterate_metadata_template)(checker)(options)(collection)(errors)(meta, type, explore) ||
        (0, iterate_metadata_atomic_1.iterate_metadata_atomic)(meta, type) ||
        (0, iterate_metadata_tuple_1.iterate_metadata_tuple)(checker)(options)(collection)(errors)(meta, type, explore) ||
        (0, iterate_metadata_array_1.iterate_metadata_array)(checker)(options)(collection)(errors)(meta, type, explore) ||
        (0, iterate_metadata_native_1.iterate_metadata_native)(checker)(meta, type) ||
        (0, iterate_metadata_map_1.iterate_metadata_map)(checker)(options)(collection)(errors)(meta, type, explore) ||
        (0, iterate_metadata_set_1.iterate_metadata_set)(checker)(options)(collection)(errors)(meta, type, explore) ||
        (0, iterate_metadata_object_1.iterate_metadata_object)(checker)(options)(collection)(errors)(meta, type);
};
exports.iterate_metadata = iterate_metadata;
