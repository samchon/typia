const validate = (() => {
  const __fn = (input) => {
    const __ok = "object" === typeof input && null !== input && false === Array.isArray(input) && ("number" === typeof input.age && Number.isInteger(input.age) && 0 <= input.age && input.age <= 4294967295 && 19 < input.age && input.age <= 100) && ("string" === typeof input.email && new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$").test(input.email)) && ("string" === typeof input.id && new RegExp("^(?:urn:uuid:)?[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$").test(input.id));
    return __ok ? { success: true, data: input, errors: [] } : { success: false, data: input, errors: [{ path: "$input", expected: "þtype", value: input }] };
  };
  __fn["~standard"] = { version: 1, vendor: "typia", validate: (input) => {
    const r = __fn(input);
    return r.success ? { value: r.data } : { issues: r.errors.map((e) => ({ message: "expected " + e.expected + ", got " + typeof e.value + " " + JSON.stringify(e.value), path: String(e.path).split(".").slice(1) })) };
  } };
  return __fn;
})();
validate({});
