"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonApplicationProgrammer = void 0;
const TransformerError_1 = require("../../transformers/TransformerError");
const application_schema_1 = require("../internal/application_schema");
var JsonApplicationProgrammer;
(function (JsonApplicationProgrammer) {
    /**
     * @internal
     */
    let IOptions;
    (function (IOptions) {
        IOptions.complement = (options) => {
            const purpose = options?.purpose ?? "swagger";
            return {
                purpose,
            };
        };
    })(IOptions = JsonApplicationProgrammer.IOptions || (JsonApplicationProgrammer.IOptions = {}));
    JsonApplicationProgrammer.write = (options) => (metadatas) => {
        const fullOptions = IOptions.complement(options);
        const components = {
            schemas: {},
        };
        const generator = (0, application_schema_1.application_schema)(fullOptions)(true)(components);
        return {
            schemas: metadatas.map((meta, i) => {
                const schema = generator(meta)({});
                if (schema === null)
                    throw new TransformerError_1.TransformerError({
                        code: "typia.json.application",
                        message: `invalid type on argument - (${meta.getName()}, ${i})`,
                    });
                return schema;
            }),
            components,
            ...fullOptions,
        };
    };
})(JsonApplicationProgrammer || (exports.JsonApplicationProgrammer = JsonApplicationProgrammer = {}));
