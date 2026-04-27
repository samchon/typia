/* @ttsc-rewritten */
import typia from 'typia';
const is = ((input) => (() => { const __is_0 = (v) => ("object" === typeof v && null !== v && false === Array.isArray(v) && ("number" === typeof v.age && Number.isFinite(v.age) && Number.isInteger(v.age) && 0 <= v.age && v.age <= 4294967295 && 19 < v.age && 100 >= v.age) && ("string" === typeof v.email && new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$").test(v.email)) && ("string" === typeof v.id && new RegExp("^(?:urn:uuid:)?[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$").test(v.id))); return __is_0(input); })());
const random = ((generator) => { const __unit = ({"components":{"schemas":{"IMember":{"additionalProperties":false,"properties":{"age":{"exclusiveMinimum":19,"format":"uint32","maximum":100,"minimum":0,"type":"integer"},"email":{"format":"email","type":"string"},"id":{"format":"uuid","type":"string"}},"required":["age","email","id"],"type":"object"}}},"schema":{"additionalProperties":false,"properties":{"age":{"exclusiveMinimum":19,"format":"uint32","maximum":100,"minimum":0,"type":"integer"},"email":{"format":"email","type":"string"},"id":{"format":"uuid","type":"string"}},"required":["age","email","id"],"type":"object"},"version":"3.1"}); const __random = (() => {
  const __number = (value, fallback) => typeof value === "number" && Number.isFinite(value) ? value : fallback;
  const __int = (value, fallback) => Math.trunc(__number(value, fallback));
  const __bigintValue = (value, fallback) => {
    if (typeof value === "bigint") return value;
    if (typeof value === "number" && Number.isFinite(value)) return BigInt(Math.trunc(value));
    if (typeof value === "string" && value.length !== 0) {
      try {
        return BigInt(value);
      } catch {}
    }
    return fallback;
  };
  const __length = (schema, fallback) => {
    const base = Math.max(0, __int(fallback, 0));
    const min = Math.max(0, __int(schema?.minItems ?? schema?.minLength, 0));
    const rawMax = schema?.maxItems ?? schema?.maxLength;
    const max = rawMax === undefined
      ? Math.max(min, base)
      : Math.max(min, __int(rawMax, Math.max(min, base)));
    return Math.min(Math.max(min, base), max);
  };
  const __format = (generator, schema) => {
    const format = schema?.format;
    if (format && typeof generator?.[format] === "function") {
      const value = generator[format]();
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
        return undefined;
    }
  };
  const __patternClass = (content) => {
    if (content.includes("1-9")) return "1";
    if (content.includes("0-9")) return "0";
    if (content.includes("a-z")) return "a";
    if (content.includes("A-Z")) return "A";
    if (content.includes("a-f")) return "a";
    if (content.includes("A-F")) return "A";
    for (let i = 0; i < content.length; ++i) {
      const ch = content[i];
      if (ch === "\\" && i + 1 < content.length) {
        const escaped = content[++i];
        if (escaped === "d") return "0";
        if (escaped === "w") return "x";
        return escaped;
      }
      if (/[0-9A-Za-z]/.test(ch)) return ch;
    }
    return "x";
  };
  const __patternQuantifier = (pattern, index) => {
    if (index >= pattern.length) return { count: 1, next: index };
    const ch = pattern[index];
    if (ch === "?") return { count: 0, next: index + 1 };
    if (ch === "*" || ch === "+") return { count: 1, next: index + 1 };
    if (ch !== "{") return { count: 1, next: index };
    let end = index + 1;
    while (end < pattern.length && pattern[end] !== "}") {
      if (pattern[end] === "\\") end += 1;
      end += 1;
    }
    if (end >= pattern.length) return { count: 1, next: index };
    const body = pattern.slice(index + 1, end);
    const head = body.split(",")[0]?.trim() ?? "";
    const parsed = Number.parseInt(head, 10);
    if (Number.isFinite(parsed)) {
      if (parsed > 0) return { count: parsed, next: end + 1 };
      if (body.includes(",") && !/^0(?:\s*)$/.test(body)) {
        return { count: 1, next: end + 1 };
      }
      return { count: 0, next: end + 1 };
    }
    return { count: 1, next: end + 1 };
  };
  const __patternGroupEnd = (pattern, start, open, close) => {
    let depth = 1;
    for (let i = start + 1; i < pattern.length; ++i) {
      const ch = pattern[i];
      if (ch === "\\") {
        i += 1;
        continue;
      }
      if (open === "(" && ch === "[") {
        while (++i < pattern.length) {
          if (pattern[i] === "\\") i += 1;
          else if (pattern[i] === "]") break;
        }
        continue;
      }
      if (ch === open) depth += 1;
      else if (ch === close) depth -= 1;
      if (depth === 0) return i;
    }
    return -1;
  };
  const __patternAlternatives = (pattern) => {
    const output = [];
    let depth = 0;
    let bracket = 0;
    let last = 0;
    for (let i = 0; i < pattern.length; ++i) {
      const ch = pattern[i];
      if (ch === "\\") {
        i += 1;
        continue;
      }
      if (ch === "[") {
        bracket += 1;
        continue;
      }
      if (ch === "]" && bracket > 0) {
        bracket -= 1;
        continue;
      }
      if (bracket > 0) continue;
      if (ch === "(") depth += 1;
      else if (ch === ")" && depth > 0) depth -= 1;
      else if (ch === "|" && depth === 0) {
        output.push(pattern.slice(last, i));
        last = i + 1;
      }
    }
    output.push(pattern.slice(last));
    return output;
  };
  const __patternSource = (pattern) => {
    let output = "";
    for (let i = 0; i < pattern.length;) {
      let token = "";
      const ch = pattern[i];
      if (ch === "^" || ch === "$") {
        i += 1;
        continue;
      }
      if (ch === "\\") {
        if (i + 1 >= pattern.length) break;
        const escaped = pattern[i + 1];
        token = escaped === "d"
          ? "0"
          : escaped === "w"
            ? "x"
            : escaped === "s"
              ? " "
              : escaped;
        i += 2;
      } else if (ch === "[") {
        const end = __patternGroupEnd(pattern, i, "[", "]");
        if (end === -1) return output;
        token = __patternClass(pattern.slice(i + 1, end));
        i = end + 1;
      } else if (ch === "(") {
        const end = __patternGroupEnd(pattern, i, "(", ")");
        if (end === -1) return output;
        let body = pattern.slice(i + 1, end);
        if (body.startsWith("?:")) body = body.slice(2);
        token = __patternSource(__patternAlternatives(body)[0] ?? "");
        i = end + 1;
      } else if (ch === "|" || ch === ")" || ch === "]") {
        break;
      } else {
        token = ch;
        i += 1;
      }
      const quantifier = __patternQuantifier(pattern, i);
      i = quantifier.next;
      if (quantifier.count > 0) {
        output += token.repeat(quantifier.count);
      }
    }
    return output;
  };
  const __patternString = (pattern) => {
    if (typeof pattern !== "string" || pattern.length === 0) return undefined;
    if (pattern.includes("[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[4][0-9A-Fa-f]{3}")) {
      return "123e4567-e89b-42d3-a456-426614174000";
    }
    if (pattern.includes("@(?:[a-z0-9]") || (pattern.includes("@") && pattern.includes("a-z0-9"))) {
      return "user@example.com";
    }
    if (pattern.includes("[0-9a-fA-F]{1,4}:") || pattern.includes("::(ffff")) {
      return "0:0:0:0:0:0:0:1";
    }
    if (pattern.includes("25[0-5]") && pattern.includes("\\.")) {
      return "127.0.0.1";
    }
    const source = __patternSource(pattern);
    if (source.length === 0) return undefined;
    return source;
  };
  const __string = (generator, schema) => {
    const formatted = __format(generator, schema);
    if (formatted !== undefined) return formatted;
    if (schema?.pattern && typeof generator?.pattern === "function") {
      try {
        const value = generator.pattern(new RegExp(schema.pattern));
        if (typeof value === "string") return value;
      } catch {
        // ignore invalid regexes and fall back to a plain string
      }
    }
    const patterned = __patternString(schema?.pattern);
    if (typeof patterned === "string" && patterned.length !== 0) {
      const min = Math.max(1, __length(schema, patterned.length));
      if (patterned.length >= min) return patterned;
      return patterned + "x".repeat(min - patterned.length);
    }
    if (typeof generator?.string === "function") {
      const value = generator.string(schema);
      if (typeof value === "string") return value;
    }
    return "x".repeat(Math.max(1, __length(schema, 8)));
  };
  const __numeric = (generator, schema, integer) => {
    const hook = integer ? generator?.integer : generator?.number;
    if (typeof hook === "function") {
      const value = hook(schema);
      if (typeof value === "number" && Number.isFinite(value)) {
        return integer ? Math.trunc(value) : value;
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
  const __bigint = (generator, schema) => {
    if (typeof generator?.bigint === "function") {
      const value = generator.bigint(schema);
      if (typeof value === "bigint") return value;
    }
    let value = __bigintValue(schema?.minimum, 0n);
    const exclusiveMinimum = schema?.exclusiveMinimum;
    if (exclusiveMinimum !== undefined) {
      const min = __bigintValue(exclusiveMinimum, value);
      if (min >= value) value = min + 1n;
    }
    const maximum = schema?.maximum;
    if (maximum !== undefined) {
      const max = __bigintValue(maximum, value);
      if (value > max) value = max;
    }
    return value;
  };
  const __mergeSchema = (base, extra) => {
    if (!base || typeof base !== "object") return extra && typeof extra === "object" ? extra : {};
    if (!extra || typeof extra !== "object") return base;
    const output = { ...base };
    for (const [key, value] of Object.entries(extra)) {
      if (key === "$ref") continue;
      if (key === "properties" && value && typeof value === "object" && !Array.isArray(value)) {
        output.properties = { ...(base.properties ?? {}), ...value };
        continue;
      }
      output[key] = value;
    }
    return output;
  };
  const __resolve = (schema, components) => {
    if (!schema) return {};
    if (typeof schema.$ref === "string") {
      const key = schema.$ref.split("/").pop();
      const resolved = key && components?.[key] ? __resolve(components[key], components) : {};
      return __mergeSchema(resolved, schema);
    }
    if (Array.isArray(schema.allOf) && schema.allOf.length > 0) {
      return schema.allOf.reduce(
        (acc, item) => __mergeSchema(acc, __resolve(item, components)),
        __mergeSchema({}, schema),
      );
    }
    return schema;
  };
  const __random = (schema, components, generator, depth) => {
    const current = __resolve(schema, components);
    if (!current || typeof current !== "object") return current;
    if (Array.isArray(current.oneOf) && current.oneOf.length > 0) {
      let choice = undefined;
      if (depth > 3) {
        choice = current.oneOf.find((candidate) => {
          const resolved = __resolve(candidate, components);
          if (!resolved || typeof resolved !== "object") return false;
          if (resolved.type === "null") return true;
          return Array.isArray(resolved.type) && resolved.type.includes("null");
        });
      }
      if (choice === undefined) {
        choice = current.oneOf.find((candidate) => {
          const resolved = __resolve(candidate, components);
          return resolved?.type !== "null";
        }) ?? current.oneOf[0];
      }
      return __random(choice, components, generator, depth);
    }
    if (Object.prototype.hasOwnProperty.call(current, "const")) {
      return current["x-typia-bigint"] === true
        ? __bigintValue(current.const, 0n)
        : current.const;
    }
    switch (current["x-typia-native"]) {
      case "Boolean":
        return true;
      case "Number":
        return __numeric(generator, current, false);
      case "String":
        return __string(generator, current);
      case "Date":
        return new Date(__format(generator, current) ?? "2020-01-01T00:00:00.000Z");
      case "Blob":
        return typeof Blob === "function" ? new Blob([]) : {};
      case "File":
        return typeof File === "function"
          ? new File([], "file")
          : (typeof Blob === "function" ? new Blob([]) : {});
      case "ArrayBuffer":
        return new ArrayBuffer(0);
      case "SharedArrayBuffer":
        return typeof SharedArrayBuffer === "function" ? new SharedArrayBuffer(0) : new ArrayBuffer(0);
      case "DataView":
        return new DataView(new ArrayBuffer(0));
      case "Map": {
        const count = depth > 3 ? 0 : __length(current, 1);
        const entries = Array.from(
          { length: count },
          () => __random(current.items ?? { type: "array", items: {} }, components, generator, depth + 1),
        ).filter((entry) => Array.isArray(entry));
        return new Map(entries);
      }
      case "Set": {
        const count = depth > 3 ? 0 : __length(current, 1);
        const values = Array.from(
          { length: count },
          () => __random(current.items ?? {}, components, generator, depth + 1),
        );
        return new Set(values);
      }
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Uint16Array":
      case "Uint32Array":
      case "Int8Array":
      case "Int16Array":
      case "Int32Array":
      case "Float32Array":
      case "Float64Array":
      case "BigInt64Array":
      case "BigUint64Array": {
        const ctor = globalThis[current["x-typia-native"]];
        return typeof ctor === "function" ? new ctor(0) : [];
      }
      case "URL":
        return new URL("https://example.com");
      case "RegExp":
        return /typia/;
    }
    const type = Array.isArray(current.type)
      ? (current.type.find((candidate) => candidate !== "null") ?? current.type[0])
      : current.type;
    switch (type) {
      case "boolean":
        if (typeof generator?.boolean === "function") {
          const value = generator.boolean(current);
          if (typeof value === "boolean") return value;
        }
        return true;
      case "integer":
        if (current["x-typia-bigint"] === true) return __bigint(generator, current);
        return __numeric(generator, current, true);
      case "number":
        return __numeric(generator, current, false);
      case "string":
        return __string(generator, current);
      case "array": {
        if (Array.isArray(current.prefixItems)) {
          const prefix = current.prefixItems.map((item) => __random(item, components, generator, depth + 1));
          const rest = current.additionalItems === undefined ? current.items : current.additionalItems;
          if (rest === undefined || rest === false) return prefix;
          const restCount = depth > 3 ? 0 : Math.max(0, __length(current, prefix.length) - prefix.length);
          return prefix.concat(
            Array.from({ length: restCount }, () => __random(rest === true ? {} : rest, components, generator, depth + 1)),
          );
        }
        const count = depth > 3 ? 0 : __length(current, 1);
        if (typeof generator?.array === "function") {
          const custom = generator.array({
            ...current,
            element: (index, total) => __random(current.items ?? {}, components, generator, depth + 1),
          });
          if (Array.isArray(custom)) return custom;
        }
        return Array.from({ length: count }, () => __random(current.items ?? {}, components, generator, depth + 1));
      }
      case "object": {
        const output = {};
        const required = new Set(Array.isArray(current.required) ? current.required : []);
        for (const [key, value] of Object.entries(current.properties ?? {})) {
          if (!required.has(key)) continue;
          output[key] = __random(value, components, generator, depth + 1);
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
  return __random;
})(); const __generator = generator ?? {}; return () => __random(__unit.schema, __unit.components?.schemas ?? {}, __generator, 0); })();
const validate = ((() => { const __toStandardPath = (path) => { if (!path.startsWith("$input")) throw new Error("Invalid path: " + JSON.stringify(path)); const segments = []; let current = ""; let state = 0; let index = "$input".length - 1; while (index < path.length - 1) { index += 1; const char = path[index]; if (state === 1) { if (char === "." || char === "[") { segments.push({ key: current }); state = 0; } else if (index === path.length - 1) { current += char; segments.push({ key: current }); index += 1; state = 0; } else current += char; } else if (state === 2) { if (char === "\"") { segments.push({ key: JSON.parse(current + char) }); index += 2; state = 0; } else if (char === "\\") { current += path[index]; index += 1; current += path[index]; } else current += char; } else if (state === 3) { if (char === "]") { segments.push({ key: Number.parseInt(current, 10) }); index += 1; state = 0; } else current += char; } if (state === 0 && index < path.length - 1) { const next = path[index]; current = ""; if (next === "[") { if (path[index + 1] === "\"") { state = 2; index += 1; current = "\""; } else state = 3; } else if (next === ".") state = 1; else throw new Error("Unreachable: pointer points invalid character"); } } if (state !== 0) throw new Error("Failed to parse path: " + JSON.stringify(path)); return segments; }; const __fn = (input) => { const __errors = (() => { const __diag = (path, expected, value) => ({ path, expected, value }); const __push = (out, chunk) => { if (chunk.length !== 0) out.push(...chunk); }; const __pick = (chunks) => { let best = []; for (const chunk of chunks) { if (chunk.length === 0) return chunk; if (best.length === 0 || chunk.length < best.length) best = chunk; } return best; }; const __prop = (path, key) => /^[$A-Z_a-z][$0-9A-Z_a-z]*$/.test(key) ? path + "." + key : path + "[" + JSON.stringify(key) + "]"; const __diag_0 = (v, p) => (() => { if ("object" !== typeof v || null === v) return [__diag(p, "IMember", v)]; const __errors = []; __push(__errors, (() => { if (("number" === typeof v.age && Number.isFinite(v.age) && Number.isInteger(v.age) && 0 <= v.age && v.age <= 4294967295 && 19 < v.age && 100 >= v.age)) return []; const __candidate_0 = ((("number" === typeof v.age && Number.isFinite(v.age) && Number.isInteger(v.age) && 0 <= v.age && v.age <= 4294967295 && 19 < v.age && 100 >= v.age)) ? [] : null); if (__candidate_0 !== null) return __candidate_0; return [__diag(p + "." + "age", "(number & Type<\"uint32\"> & ExclusiveMinimum<19> & Maximum<100>)", v.age)]; })()); __push(__errors, (() => { if (("string" === typeof v.email && new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$").test(v.email))) return []; const __candidate_0 = ((("string" === typeof v.email && new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$").test(v.email))) ? [] : null); if (__candidate_0 !== null) return __candidate_0; return [__diag(p + "." + "email", "(string & Format)", v.email)]; })()); __push(__errors, (() => { if (("string" === typeof v.id && new RegExp("^(?:urn:uuid:)?[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$").test(v.id))) return []; const __candidate_0 = ((("string" === typeof v.id && new RegExp("^(?:urn:uuid:)?[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$").test(v.id))) ? [] : null); if (__candidate_0 !== null) return __candidate_0; return [__diag(p + "." + "id", "(string & Format)", v.id)]; })()); return __errors; })(); return (() => { if ((() => { const __is_0 = (v) => ("object" === typeof v && null !== v && false === Array.isArray(v) && ("number" === typeof v.age && Number.isFinite(v.age) && Number.isInteger(v.age) && 0 <= v.age && v.age <= 4294967295 && 19 < v.age && 100 >= v.age) && ("string" === typeof v.email && new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$").test(v.email)) && ("string" === typeof v.id && new RegExp("^(?:urn:uuid:)?[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$").test(v.id))); return __is_0(input); })()) return []; const __candidate_0 = __diag_0(input, "$input"); if (__candidate_0 !== null) return __candidate_0; return [__diag("$input", "IMember", input)]; })(); })(); return __errors.length === 0 ? { success: true, data: input } : { success: false, data: input, errors: __errors }; }; __fn["~standard"] = { version: 1, vendor: "typia", validate: (input) => { const r = __fn(input); return r.success ? { value: r.data } : { issues: r.errors.map(e => ({ message: "expected " + e.expected + ", got " + e.value, path: __toStandardPath(e.path) })) }; } }; return __fn; })());
is({});
validate({});
random();
