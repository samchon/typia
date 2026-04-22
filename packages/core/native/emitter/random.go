package emitter

import (
	"errors"
	"fmt"

	"github.com/samchon/typia/packages/core/native/metadata"
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
	unitExpr, err := EmitRandomSchemaExpression(sanitizeRandomSchema(schema))
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
	unitExpr, err := EmitRandomSchemaExpression(sanitizeRandomSchema(schema))
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

func sanitizeRandomSchema(schema *metadata.Schema) *metadata.Schema {
	cloner := randomSchemaCloner{
		schemas: make(map[*metadata.Schema]*metadata.Schema),
		arrays:  make(map[*metadata.ArrayType]*metadata.ArrayType),
		tuples:  make(map[*metadata.TupleType]*metadata.TupleType),
		objects: make(map[*metadata.ObjectType]*metadata.ObjectType),
		aliases: make(map[*metadata.AliasType]*metadata.AliasType),
	}
	return cloner.cloneSchema(schema, false)
}

type randomSchemaCloner struct {
	schemas map[*metadata.Schema]*metadata.Schema
	arrays  map[*metadata.ArrayType]*metadata.ArrayType
	tuples  map[*metadata.TupleType]*metadata.TupleType
	objects map[*metadata.ObjectType]*metadata.ObjectType
	aliases map[*metadata.AliasType]*metadata.AliasType
}

func (c *randomSchemaCloner) cloneSchema(input *metadata.Schema, arrayElement bool) *metadata.Schema {
	if input == nil {
		return nil
	}
	if cloned, ok := c.schemas[input]; ok {
		if arrayElement {
			cloned.Optional = false
		}
		return cloned
	}
	out := &metadata.Schema{
		Any:      input.Any,
		Required: input.Required,
		Optional: input.Optional,
		Nullable: input.Nullable,
		Atomics:  append([]metadata.Atomic(nil), input.Atomics...),
	}
	if arrayElement {
		out.Required = true
		out.Optional = false
	}
	c.schemas[input] = out
	out.Constants = append([]metadata.Constant(nil), input.Constants...)
	out.Templates = append([]metadata.Template(nil), input.Templates...)
	out.Natives = append([]metadata.Native(nil), input.Natives...)
	out.Functions = append([]*metadata.Function(nil), input.Functions...)

	if input.Rest != nil {
		out.Rest = c.cloneSchema(input.Rest, false)
	}
	if input.Escaped != nil {
		out.Escaped = &metadata.Escaped{
			Original: c.cloneSchema(input.Escaped.Original, false),
			Returns:  c.cloneSchema(input.Escaped.Returns, false),
		}
	}
	if len(input.Arrays) != 0 {
		out.Arrays = make([]*metadata.ArrayRef, len(input.Arrays))
		for i, ref := range input.Arrays {
			if ref == nil {
				continue
			}
			out.Arrays[i] = &metadata.ArrayRef{
				Type: c.cloneArrayType(ref.Type),
				Tags: ref.Tags.Clone(),
			}
		}
	}
	if len(input.Tuples) != 0 {
		out.Tuples = make([]*metadata.TupleRef, len(input.Tuples))
		for i, ref := range input.Tuples {
			if ref == nil {
				continue
			}
			out.Tuples[i] = &metadata.TupleRef{
				Type: c.cloneTupleType(ref.Type),
				Tags: ref.Tags.Clone(),
			}
		}
	}
	if len(input.Objects) != 0 {
		out.Objects = make([]*metadata.ObjectRef, len(input.Objects))
		for i, ref := range input.Objects {
			if ref == nil {
				continue
			}
			out.Objects[i] = &metadata.ObjectRef{
				Type: c.cloneObjectType(ref.Type),
				Tags: ref.Tags.Clone(),
			}
		}
	}
	if len(input.Aliases) != 0 {
		out.Aliases = make([]*metadata.AliasRef, len(input.Aliases))
		for i, ref := range input.Aliases {
			if ref == nil {
				continue
			}
			out.Aliases[i] = &metadata.AliasRef{
				Type: c.cloneAliasType(ref.Type),
				Tags: ref.Tags.Clone(),
			}
		}
	}
	if len(input.Sets) != 0 {
		out.Sets = make([]*metadata.SetRef, len(input.Sets))
		for i, ref := range input.Sets {
			if ref == nil {
				continue
			}
			out.Sets[i] = &metadata.SetRef{
				Value: c.cloneSchema(ref.Value, false),
				Tags:  ref.Tags.Clone(),
			}
		}
	}
	if len(input.Maps) != 0 {
		out.Maps = make([]*metadata.MapRef, len(input.Maps))
		for i, ref := range input.Maps {
			if ref == nil {
				continue
			}
			out.Maps[i] = &metadata.MapRef{
				Key:   c.cloneSchema(ref.Key, false),
				Value: c.cloneSchema(ref.Value, false),
				Tags:  ref.Tags.Clone(),
			}
		}
	}
	return out
}

func (c *randomSchemaCloner) cloneArrayType(input *metadata.ArrayType) *metadata.ArrayType {
	if input == nil {
		return nil
	}
	if cloned, ok := c.arrays[input]; ok {
		return cloned
	}
	out := &metadata.ArrayType{
		Name:      input.Name,
		Index:     input.Index,
		Recursive: input.Recursive,
		Nullables: append([]bool(nil), input.Nullables...),
	}
	c.arrays[input] = out
	out.Value = c.cloneSchema(input.Value, true)
	return out
}

func (c *randomSchemaCloner) cloneTupleType(input *metadata.TupleType) *metadata.TupleType {
	if input == nil {
		return nil
	}
	if cloned, ok := c.tuples[input]; ok {
		return cloned
	}
	out := &metadata.TupleType{
		Name:      input.Name,
		Index:     input.Index,
		Recursive: input.Recursive,
		Nullables: append([]bool(nil), input.Nullables...),
	}
	c.tuples[input] = out
	if len(input.Elements) != 0 {
		out.Elements = make([]*metadata.Schema, len(input.Elements))
		for i, elem := range input.Elements {
			out.Elements[i] = c.cloneSchema(elem, true)
		}
	}
	return out
}

func (c *randomSchemaCloner) cloneObjectType(input *metadata.ObjectType) *metadata.ObjectType {
	if input == nil {
		return nil
	}
	if cloned, ok := c.objects[input]; ok {
		return cloned
	}
	out := &metadata.ObjectType{
		Name:        input.Name,
		Description: input.Description,
		JsDocTags:   append([]string(nil), input.JsDocTags...),
		Index:       input.Index,
		Validated:   input.Validated,
		Recursive:   input.Recursive,
		Nullables:   append([]bool(nil), input.Nullables...),
	}
	c.objects[input] = out
	if len(input.Properties) != 0 {
		out.Properties = make([]*metadata.Property, len(input.Properties))
		for i, prop := range input.Properties {
			if prop == nil {
				continue
			}
			out.Properties[i] = &metadata.Property{
				Key:         c.cloneSchema(prop.Key, false),
				Value:       c.cloneSchema(prop.Value, false),
				Description: prop.Description,
				JsDocTags:   append([]string(nil), prop.JsDocTags...),
			}
		}
	}
	if len(input.DynamicProperties) != 0 {
		out.DynamicProperties = make([]*metadata.Property, len(input.DynamicProperties))
		for i, prop := range input.DynamicProperties {
			if prop == nil {
				continue
			}
			out.DynamicProperties[i] = &metadata.Property{
				Key:         c.cloneSchema(prop.Key, false),
				Value:       c.cloneSchema(prop.Value, false),
				Description: prop.Description,
				JsDocTags:   append([]string(nil), prop.JsDocTags...),
			}
		}
	}
	out.AdditionalProperties = c.cloneSchema(input.AdditionalProperties, false)
	return out
}

func (c *randomSchemaCloner) cloneAliasType(input *metadata.AliasType) *metadata.AliasType {
	if input == nil {
		return nil
	}
	if cloned, ok := c.aliases[input]; ok {
		return cloned
	}
	out := &metadata.AliasType{
		Name:        input.Name,
		Description: input.Description,
		JsDocTags:   append([]string(nil), input.JsDocTags...),
		Recursive:   input.Recursive,
		Nullables:   append([]bool(nil), input.Nullables...),
	}
	c.aliases[input] = out
	out.Value = c.cloneSchema(input.Value, false)
	return out
}

func randomRuntimeHelper() string {
	return `(() => {
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
    if (Object.prototype.hasOwnProperty.call(current, "const")) {
      return current["x-typia-bigint"] === true
        ? __bigintValue(current.const, 0n)
        : current.const;
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
