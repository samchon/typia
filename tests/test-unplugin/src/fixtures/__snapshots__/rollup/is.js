// is.js
const is = ((input) => (() => {
  const __is_0 = (v) => "object" === typeof v && null !== v && false === Array.isArray(v) && ("number" === typeof v.age && Number.isFinite(v.age) && Number.isInteger(v.age) && 0 <= v.age && v.age <= 4294967295 && 19 < v.age && 100 >= v.age) && ("string" === typeof v.email && new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$").test(v.email)) && ("string" === typeof v.id && new RegExp("^(?:urn:uuid:)?[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$").test(v.id));
  return __is_0(input);
})());
is({});
