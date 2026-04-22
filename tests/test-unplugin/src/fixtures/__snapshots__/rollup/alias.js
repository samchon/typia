// alias.js
const is = ((input) => "object" === typeof input && null !== input && false === Array.isArray(input) && ("number" === typeof input.age && Number.isInteger(input.age) && 0 <= input.age && input.age <= 4294967295 && 19 < input.age && input.age <= 100) && ("string" === typeof input.email && new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$").test(input.email)) && ("string" === typeof input.id && new RegExp("^(?:urn:uuid:)?[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$").test(input.id)));
const random = /* @__PURE__ */ ((generator) => {
  const __unit = { "components": { "schemas": { "\uFFFDtype": { "additionalProperties": false, "properties": { "age": { "exclusiveMinimum": 19, "maximum": 100, "type": "number" }, "email": { "format": "email", "type": "string" }, "id": { "format": "uuid", "type": "string" } }, "required": ["age", "email", "id"], "type": "object" } } }, "schema": { "additionalProperties": false, "properties": { "age": { "exclusiveMinimum": 19, "maximum": 100, "type": "number" }, "email": { "format": "email", "type": "string" }, "id": { "format": "uuid", "type": "string" } }, "required": ["age", "email", "id"], "type": "object" }};
  const __random = /* @__PURE__ */ (() => {
    const __number = (value, fallback) => typeof value === "number" && Number.isFinite(value) ? value : fallback;
    const __int = (value, fallback) => Math.trunc(__number(value, fallback));
    const __length = (schema, fallback) => {
      const min = Math.max(0, __int(schema?.minItems ?? schema?.minLength, fallback));
      const max = Math.max(min, __int(schema?.maxItems ?? schema?.maxLength, Math.max(min, fallback)));
      return Math.min(Math.max(min, fallback), max);
    };
    const __format = (generator2, schema) => {
      const format = schema?.format;
      if (format && typeof generator2?.[format] === "function") {
        const value = generator2[format]();
        if (typeof value === "string") return value;
      }
      switch (format) {
        case "uuid":
          return "123e4567-e89b-12d3-a456-426614174000";
        case "email":
        case "idn-email":
          return "user@example.com";
        case "hostname":
        case "idn-hostname":
          return "example.com";
        case "date":
          return "2020-01-01";
        case "date-time":
        case "datetime":
          return "2020-01-01T00:00:00.000Z";
        case "time":
          return "12:34:56.000Z";
        case "duration":
          return "P1D";
        case "byte":
          return "aGVsbG8=";
        case "json-pointer":
          return "/components/schemas/Example";
        case "relative-json-pointer":
          return "0/example";
        case "ipv4":
          return "127.0.0.1";
        case "ipv6":
          return "2001:db8::1";
        case "iri":
        case "iri-reference":
        case "uri":
        case "uri-reference":
        case "url":
          return "https://example.com";
        case "uri-template":
          return "https://example.com/{id}";
        case "password":
          return "password-1234";
        case "regex":
          return "typia";
        default:
          return void 0;
      }
    };
    const __string = (generator2, schema) => {
      if (typeof generator2?.string === "function") {
        const value = generator2.string(schema);
        if (typeof value === "string") return value;
      }
      const formatted = __format(generator2, schema);
      if (formatted !== void 0) return formatted;
      if (schema?.pattern && typeof generator2?.pattern === "function") {
        try {
          const value = generator2.pattern(new RegExp(schema.pattern));
          if (typeof value === "string") return value;
        } catch {
        }
      }
      return "x".repeat(Math.max(1, __length(schema, 8)));
    };
    const __numeric = (generator2, schema, integer) => {
      const hook = integer ? generator2?.integer : generator2?.number;
      if (typeof hook === "function") {
        const value2 = hook(schema);
        if (typeof value2 === "number" && Number.isFinite(value2)) {
          return integer ? Math.trunc(value2) : value2;
        }
      }
      let value = __number(schema?.minimum, 0);
      if (typeof schema?.exclusiveMinimum === "number" && schema.exclusiveMinimum >= value) {
        value = schema.exclusiveMinimum + (integer ? 1 : 0.1);
      }
      if (typeof schema?.maximum === "number" && value > schema.maximum) {
        value = schema.maximum;
      }
      return integer ? Math.trunc(value) : value;
    };
    const __resolve = (schema, components) => {
      if (!schema) return {};
      if (typeof schema.$ref === "string") {
        const key = schema.$ref.split("/").pop();
        return key && components?.[key] ? components[key] : {};
      }
      if (Array.isArray(schema.allOf) && schema.allOf.length > 0) {
        return __resolve(schema.allOf[0], components);
      }
      if (Array.isArray(schema.oneOf) && schema.oneOf.length > 0) {
        const choice = schema.oneOf.find((candidate) => candidate?.type !== "null") ?? schema.oneOf[0];
        return __resolve(choice, components);
      }
      return schema;
    };
    const __random2 = (schema, components, generator2, depth) => {
      const current = __resolve(schema, components);
      if (!current || typeof current !== "object") return current;
      if (Object.prototype.hasOwnProperty.call(current, "const")) return current.const;
      const type = Array.isArray(current.type) ? current.type.find((candidate) => candidate !== "null") ?? current.type[0] : current.type;
      switch (type) {
        case "boolean":
          if (typeof generator2?.boolean === "function") {
            const value = generator2.boolean(current);
            if (typeof value === "boolean") return value;
          }
          return true;
        case "integer":
          return __numeric(generator2, current, true);
        case "number":
          return __numeric(generator2, current, false);
        case "string":
          return __string(generator2, current);
        case "array": {
          if (Array.isArray(current.prefixItems) && current.prefixItems.length > 0) {
            return current.prefixItems.map((item) => __random2(item, components, generator2, depth + 1));
          }
          const count = depth > 3 ? 0 : __length(current, 1);
          if (typeof generator2?.array === "function") {
            const custom = generator2.array({
              ...current,
              element: (index, total) => __random2(current.items ?? {}, components, generator2, depth + 1)
            });
            if (Array.isArray(custom)) return custom;
          }
          return Array.from({ length: count }, () => __random2(current.items ?? {}, components, generator2, depth + 1));
        }
        case "object": {
          const output = {};
          for (const [key, value] of Object.entries(current.properties ?? {})) {
            output[key] = __random2(value, components, generator2, depth + 1);
          }
          return output;
        }
        case "null":
          return null;
        default:
          if (current.nullable === true) return null;
          return {};
      }
    };
    return __random2;
  })();
  const __generator = {};
  return () => __random(__unit.schema, __unit.components?.schemas ?? {}, __generator, 0);
})();
const validate = (() => {
  const __fn = (input) => {
    const __ok = "object" === typeof input && null !== input && false === Array.isArray(input) && ("number" === typeof input.age && Number.isInteger(input.age) && 0 <= input.age && input.age <= 4294967295 && 19 < input.age && input.age <= 100) && ("string" === typeof input.email && new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$").test(input.email)) && ("string" === typeof input.id && new RegExp("^(?:urn:uuid:)?[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$").test(input.id));
    return __ok ? { success: true, data: input, errors: [] } : { success: false, data: input, errors: [{ path: "$input", expected: "\xFEtype", value: input }] };
  };
  __fn["~standard"] = { version: 1, vendor: "typia", validate: (input) => {
    const r = __fn(input);
    return r.success ? { value: r.data } : { issues: r.errors.map((e) => ({ message: "expected " + e.expected + ", got " + typeof e.value + " " + JSON.stringify(e.value), path: String(e.path).split(".").slice(1) })) };
  } };
  return __fn;
})();
is({});
validate({});
random();
