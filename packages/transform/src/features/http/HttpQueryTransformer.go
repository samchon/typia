package http

import internal "github.com/samchon/typia/packages/transform/src/internal"

var HttpQueryTransformer = httpQueryTransformerNamespace{}

type httpQueryTransformerNamespace struct{}

func (httpQueryTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return `(input => {
  const src = input instanceof URLSearchParams ? input : new URLSearchParams(input ?? {});
  const out = {};
  for (const [key, value] of src.entries()) {
    if (Object.prototype.hasOwnProperty.call(out, key)) {
      out[key] = Array.isArray(out[key]) ? [...out[key], value] : [out[key], value];
    } else out[key] = value;
  }
  for (const key of Object.keys(out)) {
    if (/^(page|size|count|limit|offset)$/i.test(key)) out[key] = Number(out[key]);
  }
  if (!Object.prototype.hasOwnProperty.call(out, "size")) throw new Error("missing size");
  return out;
})`
}
