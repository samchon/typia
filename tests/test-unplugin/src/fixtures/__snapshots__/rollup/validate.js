// validate.js
const validate = (() => {
  const __toStandardPath = (path) => {
    if (!path.startsWith("$input")) throw new Error("Invalid path: " + JSON.stringify(path));
    const segments = [];
    let current = "";
    let state = 0;
    let index = "$input".length - 1;
    while (index < path.length - 1) {
      index += 1;
      const char = path[index];
      if (state === 1) {
        if (char === "." || char === "[") {
          segments.push({ key: current });
          state = 0;
        } else if (index === path.length - 1) {
          current += char;
          segments.push({ key: current });
          index += 1;
          state = 0;
        } else current += char;
      } else if (state === 2) {
        if (char === '"') {
          segments.push({ key: JSON.parse(current + char) });
          index += 2;
          state = 0;
        } else if (char === "\\") {
          current += path[index];
          index += 1;
          current += path[index];
        } else current += char;
      } else if (state === 3) {
        if (char === "]") {
          segments.push({ key: Number.parseInt(current, 10) });
          index += 1;
          state = 0;
        } else current += char;
      }
      if (state === 0 && index < path.length - 1) {
        const next = path[index];
        current = "";
        if (next === "[") {
          if (path[index + 1] === '"') {
            state = 2;
            index += 1;
            current = '"';
          } else state = 3;
        } else if (next === ".") state = 1;
        else throw new Error("Unreachable: pointer points invalid character");
      }
    }
    if (state !== 0) throw new Error("Failed to parse path: " + JSON.stringify(path));
    return segments;
  };
  const __fn = (input) => {
    const __errors = (() => {
      const __diag = (path, expected, value) => ({ path, expected, value });
      const __push = (out, chunk) => {
        if (chunk.length !== 0) out.push(...chunk);
      };
      const __diag_0 = (v, p) => (() => {
        if ("object" !== typeof v || null === v) return [__diag(p, "IMember", v)];
        const __errors2 = [];
        __push(__errors2, (() => {
          if ("number" === typeof v.age && Number.isFinite(v.age) && Number.isInteger(v.age) && 0 <= v.age && v.age <= 4294967295 && 19 < v.age && 100 >= v.age) return [];
          const __candidate_0 = "number" === typeof v.age && Number.isFinite(v.age) && Number.isInteger(v.age) && 0 <= v.age && v.age <= 4294967295 && 19 < v.age && 100 >= v.age ? [] : null;
          if (__candidate_0 !== null) return __candidate_0;
          return [__diag(p + ".age", '(number & Type<"uint32"> & ExclusiveMinimum<19> & Maximum<100>)', v.age)];
        })());
        __push(__errors2, (() => {
          if ("string" === typeof v.email && new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$").test(v.email)) return [];
          const __candidate_0 = "string" === typeof v.email && new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$").test(v.email) ? [] : null;
          if (__candidate_0 !== null) return __candidate_0;
          return [__diag(p + ".email", "(string & Format)", v.email)];
        })());
        __push(__errors2, (() => {
          if ("string" === typeof v.id && new RegExp("^(?:urn:uuid:)?[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$").test(v.id)) return [];
          const __candidate_0 = "string" === typeof v.id && new RegExp("^(?:urn:uuid:)?[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$").test(v.id) ? [] : null;
          if (__candidate_0 !== null) return __candidate_0;
          return [__diag(p + ".id", "(string & Format)", v.id)];
        })());
        return __errors2;
      })();
      return (() => {
        if ((() => {
          const __is_0 = (v) => "object" === typeof v && null !== v && false === Array.isArray(v) && ("number" === typeof v.age && Number.isFinite(v.age) && Number.isInteger(v.age) && 0 <= v.age && v.age <= 4294967295 && 19 < v.age && 100 >= v.age) && ("string" === typeof v.email && new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$").test(v.email)) && ("string" === typeof v.id && new RegExp("^(?:urn:uuid:)?[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$").test(v.id));
          return __is_0(input);
        })()) return [];
        const __candidate_0 = __diag_0(input, "$input");
        if (__candidate_0 !== null) return __candidate_0;
        return [__diag("$input", "IMember", input)];
      })();
    })();
    return __errors.length === 0 ? { success: true, data: input } : { success: false, data: input, errors: __errors };
  };
  __fn["~standard"] = { version: 1, vendor: "typia", validate: (input) => {
    const r = __fn(input);
    return r.success ? { value: r.data } : { issues: r.errors.map((e) => ({ message: "expected " + e.expected + ", got " + e.value, path: __toStandardPath(e.path) })) };
  } };
  return __fn;
})();
validate({});
