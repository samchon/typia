"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.application_default = void 0;
/**
 * @internal
 */
const application_default = (attribute) => (pred) => (caster) => {
    const defaults = (attribute["x-typia-jsDocTags"] ?? []).filter((tag) => tag.name === "default");
    for (const alias of defaults)
        if (alias.text?.length && pred(alias.text[0].text))
            return caster(alias.text[0].text);
    return undefined;
};
exports.application_default = application_default;
