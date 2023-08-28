"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataTypeTagFactory = void 0;
var MetadataTypeTagFactory;
(function (MetadataTypeTagFactory) {
    MetadataTypeTagFactory.analyze = (errors) => (type) => (objects, explore) => {
        const messages = [];
        const report = (property) => (msg) => {
            messages.push(`the property ${property === null
                ? `["typia.tag"]`
                : `["typia.tag.${property}"]`} ${msg}.`);
            return false;
        };
        //----
        // VALIDATION PROCESS
        //----
        const filtered = objects.filter((obj) => {
            // ONLY ONE PROPERTY
            if (obj.properties.length !== 1)
                return false;
            // THE TAG.TYPE PROPERTY MUST BE
            const top = obj.properties[0];
            if (top.key.getSoleLiteral() !== "typia.tag" ||
                top.value.size() !== 1 ||
                top.value.objects.length !== 1)
                return false;
            else if (top.value.optional === false)
                return report(null)("must be optional object");
            // CHECK LIST OF PROPERTIES
            const tag = top.value.objects[0];
            const statics = tag.properties
                .map((p) => p.key.getSoleLiteral())
                .filter((str) => str !== null);
            if (FIELDS.some((f) => !statics.includes(f)))
                return report(null)(`must have four properties - ${FIELDS.map((str) => `'${str}'`).join(", ")}`);
            const each = tag.properties.map((p) => {
                const key = p.key.getSoleLiteral();
                if (key === null)
                    return true;
                else if (FIELDS.includes(key) === false)
                    return true;
                return validate_property(report)(key, p.value);
            });
            return each.every((v) => v === true);
        });
        if (filtered.length === 0)
            return [];
        //----
        // CONSTRUCT TYPE TAGS
        //----
        // CREATE 1ST
        const tagList = filtered.map(create_metadata_type_tag(report));
        const output = [];
        for (const tag of tagList)
            if (tag !== null)
                output.push({
                    target: tag.target.some((str) => str === type)
                        ? type
                        : null,
                    name: tag.name,
                    kind: tag.kind,
                    value: tag.value,
                    validate: tag.validate[type],
                    exclusive: tag.exclusive,
                });
        MetadataTypeTagFactory.validate(report)(type)(output);
        if (messages.length > 0) {
            errors.push({
                name: [type, ...objects.map((o) => o.name)].join(" & "),
                explore,
                messages,
            });
            return [];
        }
        return output;
    };
    MetadataTypeTagFactory.validate = (report) => (type) => (tagList) => {
        let success = true;
        for (const tag of tagList)
            if (tag.target !== type) {
                success &&= report(null)(`target must constains ${type} type`);
            }
        tagList.forEach((tag, i) => {
            if (tag.exclusive === false)
                return;
            else if (tag.exclusive === true) {
                const some = tagList.some((opposite, j) => i !== j && opposite.kind === tag.kind);
                if (some === true)
                    success &&= report(null)(`kind '${tag.kind}' can't be duplicated`);
            }
            else if (Array.isArray(tag.exclusive)) {
                const some = tagList.find((opposite, j) => i !== j &&
                    opposite.kind === tag.kind &&
                    tag.exclusive.includes(opposite.name));
                if (some !== undefined)
                    success ??= report(null)(`kind '${tag.kind}' can't be used with '${some.name}'`);
            }
        });
        return success;
    };
    const validate_property = (report) => (key, value) => {
        if (
        // TARGET
        key === "target" &&
            (value.constants.length !== 1 ||
                value.constants[0].values.length !== value.size() ||
                value.constants[0].values.some((v) => v !== "bigint" &&
                    v !== "number" &&
                    v !== "string" &&
                    v !== "array")))
            return report(key)(`must be one of 'bigint', 'number', 'string', 'array'`);
        else if (
        // KIND
        key === "kind" &&
            (value.size() !== 1 ||
                value.constants.length !== 1 ||
                value.constants[0].type !== "string" ||
                value.constants[0].values.length !== 1))
            return report(key)("must be a string literal type");
        else if (
        // VALUE
        key === "value" &&
            (value.size() > 1 ||
                (value.size() !== 0 &&
                    (value.constants.length !== 1 ||
                        value.constants[0].values.length !== 1))))
            return report(key)("must be a constant literal type or undefined value");
        else if (key === "exclusive")
            return get_exclusive(report)(key)(value) !== null;
        else if (key === "validate") {
            //----
            // VALIDATE
            //----
            // STRING CASE
            const single = value.size() === 1 &&
                value.constants.length === 1 &&
                value.constants[0].type === "string" &&
                value.constants[0].values.length === 1;
            if (single === true)
                return true;
            // RECORD<TARGET, STRING>
            const target = value.objects[0]?.properties
                .map((p) => p.key.getSoleLiteral())
                .filter((str) => str !== null);
            if (target === undefined)
                return report("target")(`must be one of 'bigint', 'number', 'string', 'array'`);
            const variadic = value.size() === 1 &&
                value.objects.length === 1 &&
                value.objects[0].properties.every((vp) => vp.value.size() === 1 &&
                    vp.value.isRequired() &&
                    vp.value.nullable === false &&
                    vp.value.constants.length === 1 &&
                    vp.value.constants[0].type === "string" &&
                    vp.value.constants[0].values.length === 1 &&
                    target.includes(vp.key.getSoleLiteral()));
            if (variadic === false)
                return report(key)(`must be a string literal type or Record<Target, string> type.`);
        }
        return true;
    };
    const create_metadata_type_tag = (report) => (obj) => {
        const find = (key) => obj.properties[0]?.value.objects[0]?.properties.find((p) => p.key.getSoleLiteral() === key);
        const target = find("target").value.constants[0]
            .values;
        const kind = find("kind").value.constants[0]
            .values[0];
        const value = find("value")?.value.constants[0]?.values[0];
        const exclusive = get_exclusive(report)("exclusive")(find("exclusive")?.value);
        if (exclusive === null)
            return null;
        const validate = (() => {
            const validate = find("validate").value;
            if (validate.constants.length)
                return Object.fromEntries(target.map((t) => [
                    t,
                    validate.constants[0].values[0],
                ]));
            return Object.fromEntries(validate.objects[0].properties.map((p) => [
                p.key.getSoleLiteral(),
                p.value.constants[0].values[0],
            ]));
        })();
        return {
            name: obj.name,
            target,
            kind,
            value,
            validate,
            exclusive: exclusive ?? false,
        };
    };
    const get_exclusive = (report) => (key) => (value) => {
        if (value === undefined)
            return false;
        else if (value.size() === 1 &&
            value.constants.length === 1 &&
            value.constants[0].type === "boolean" &&
            value.constants[0].values.length === 1)
            return value.constants[0].values[0];
        else if (value.size() === 1 &&
            value.tuples.length === 1 &&
            value.tuples[0].type.elements.every((elem) => elem.size() === 1 &&
                elem.constants.length === 1 &&
                elem.constants[0].type === "string" &&
                elem.constants[0].values.length === 1))
            return value.tuples[0].type.elements.map((elem) => elem.constants[0].values[0]);
        report(key)("must a boolean literal type or a tuple of string literal types.");
        return null;
    };
})(MetadataTypeTagFactory || (exports.MetadataTypeTagFactory = MetadataTypeTagFactory = {}));
const FIELDS = ["target", "kind", "value", "validate"];
