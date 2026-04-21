package emitter

import (
	"errors"
	"fmt"

	"github.com/samchon/typia/packages/ttsc/internal/engine/metadata"
)

// EmitRandomArrowFunction emits the runtime generator consumed by
// typia.random<T>(generator?).
func EmitRandomArrowFunction(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	if native, ok := findUnsupportedRandomNative(schema); ok {
		return "", fmt.Errorf("%w: random does not support %s", ErrUnsupportedSchema, native)
	}
	unitExpr, err := EmitJsonSchemaExpression(schema)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(
		`(generator) => { const __unit = %s; const __random = %s; return __random(__unit.schema, __unit.components?.schemas ?? {}, generator ?? {}, 0); }`,
		unitExpr,
		randomRuntimeHelper(),
	), nil
}

// EmitCreateRandomArrowFunction emits the reusable generator returned by
// typia.createRandom<T>(generator?).
func EmitCreateRandomArrowFunction(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	if native, ok := findUnsupportedRandomNative(schema); ok {
		return "", fmt.Errorf("%w: random does not support %s", ErrUnsupportedSchema, native)
	}
	unitExpr, err := EmitJsonSchemaExpression(schema)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(
		`(generator) => { const __unit = %s; const __random = %s; const __generator = generator ?? {}; return () => __random(__unit.schema, __unit.components?.schemas ?? {}, __generator, 0); }`,
		unitExpr,
		randomRuntimeHelper(),
	), nil
}

func findUnsupportedRandomNative(schema *metadata.Schema) (string, bool) {
	var found string
	ok := newSchemaWalker().walkSchema(schema, func(s *metadata.Schema) bool {
		for _, native := range s.Natives {
			switch native.Name {
			case "WeakMap", "WeakSet", "Map", "Set":
				found = native.Name
				return true
			}
		}
		return false
	})
	return found, ok
}

func randomRuntimeHelper() string {
	return `(() => {
  const __number = (value, fallback) => typeof value === "number" && Number.isFinite(value) ? value : fallback;
  const __int = (value, fallback) => Math.trunc(__number(value, fallback));
  const __length = (schema, fallback) => {
    const min = Math.max(0, __int(schema?.minItems ?? schema?.minLength, fallback));
    const max = Math.max(min, __int(schema?.maxItems ?? schema?.maxLength, Math.max(min, fallback)));
    return Math.min(Math.max(min, fallback), max);
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
  const __string = (generator, schema) => {
    if (typeof generator?.string === "function") {
      const value = generator.string(schema);
      if (typeof value === "string") return value;
    }
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
  const __random = (schema, components, generator, depth) => {
    const current = __resolve(schema, components);
    if (!current || typeof current !== "object") return current;
    if (Object.prototype.hasOwnProperty.call(current, "const")) return current.const;
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
        return __numeric(generator, current, true);
      case "number":
        return __numeric(generator, current, false);
      case "string":
        return __string(generator, current);
      case "array": {
        if (Array.isArray(current.prefixItems) && current.prefixItems.length > 0) {
          return current.prefixItems.map((item) => __random(item, components, generator, depth + 1));
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
        for (const [key, value] of Object.entries(current.properties ?? {})) {
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
})()`
}
