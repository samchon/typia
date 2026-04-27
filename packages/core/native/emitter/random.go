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
	return emitRandomDirectArrowFunction(schema)
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
	return emitCreateRandomDirectArrowFunction(schema)
}

func findUnsupportedRandomNative(schema *metadata.Schema) (string, bool) {
	var found string
	ok := newSchemaWalker().walkSchema(schema, func(s *metadata.Schema) bool {
		for _, native := range s.Natives {
			switch native.Name {
			case "WeakMap", "WeakSet":
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
        return __typia_transform_randomFormatUuid._randomFormatUuid();
      case "email":
        return __typia_transform_randomFormatEmail._randomFormatEmail();
      case "idn-email":
        return __typia_transform_randomFormatIdnEmail._randomFormatIdnEmail();
      case "hostname":
        return __typia_transform_randomFormatHostname._randomFormatHostname();
      case "idn-hostname":
        return __typia_transform_randomFormatIdnHostname._randomFormatIdnHostname();
      case "date":
        return __typia_transform_randomFormatDate._randomFormatDate();
      case "date-time":
      case "datetime":
        return __typia_transform_randomFormatDatetime._randomFormatDatetime();
      case "time":
        return __typia_transform_randomFormatTime._randomFormatTime();
      case "duration":
        return __typia_transform_randomFormatDuration._randomFormatDuration();
      case "byte":
        return __typia_transform_randomFormatByte._randomFormatByte();
      case "json-pointer":
        return __typia_transform_randomFormatJsonPointer._randomFormatJsonPointer();
      case "relative-json-pointer":
        return __typia_transform_randomFormatRelativeJsonPointer._randomFormatRelativeJsonPointer();
      case "ipv4":
        return __typia_transform_randomFormatIpv4._randomFormatIpv4();
      case "ipv6":
        return __typia_transform_randomFormatIpv6._randomFormatIpv6();
      case "iri":
        return __typia_transform_randomFormatIri._randomFormatIri();
      case "iri-reference":
        return __typia_transform_randomFormatIriReference._randomFormatIriReference();
      case "uri":
        return __typia_transform_randomFormatUri._randomFormatUri();
      case "uri-reference":
        return __typia_transform_randomFormatUriReference._randomFormatUriReference();
      case "url":
        return __typia_transform_randomFormatUrl._randomFormatUrl();
      case "uri-template":
        return __typia_transform_randomFormatUriTemplate._randomFormatUriTemplate();
      case "password":
        return __typia_transform_randomFormatPassword._randomFormatPassword();
      case "regex":
        return __typia_transform_randomFormatRegex._randomFormatRegex();
      default:
        return undefined;
    }
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
    if (typeof schema?.pattern === "string") {
      try {
        return __typia_transform_randomPattern._randomPattern(new RegExp(schema.pattern));
      } catch {
        // ignore invalid regexes and fall back to a plain string
      }
    }
    if (typeof generator?.string === "function") {
      const value = generator.string(schema);
      if (typeof value === "string") return value;
    }
    return __typia_transform_randomString._randomString(schema ?? { type: "string" });
  };
  const __numeric = (generator, schema, integer) => {
    const hook = integer ? generator?.integer : generator?.number;
    if (typeof hook === "function") {
      const value = hook(schema);
      if (typeof value === "number" && Number.isFinite(value)) {
        return integer ? Math.trunc(value) : value;
      }
    }
    return integer
      ? __typia_transform_randomInteger._randomInteger(schema ?? { type: "integer" })
      : __typia_transform_randomNumber._randomNumber(schema ?? { type: "number" });
  };
  const __bigint = (generator, schema) => {
    const normalized = schema && typeof schema === "object"
      ? {
          ...schema,
          minimum: schema.minimum === undefined ? undefined : Number(schema.minimum),
          maximum: schema.maximum === undefined ? undefined : Number(schema.maximum),
          exclusiveMinimum: schema.exclusiveMinimum === undefined ? undefined : Number(schema.exclusiveMinimum),
          exclusiveMaximum: schema.exclusiveMaximum === undefined ? undefined : Number(schema.exclusiveMaximum),
          multipleOf: schema.multipleOf === undefined ? undefined : Number(schema.multipleOf),
        }
      : schema;
    if (typeof generator?.bigint === "function") {
      const value = generator.bigint(normalized);
      if (typeof value === "bigint") return value;
    }
    return __typia_transform_randomBigint._randomBigint(normalized ?? { type: "integer" });
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
        const choices = current.oneOf.filter((candidate) => {
          const resolved = __resolve(candidate, components);
          return resolved?.type !== "null";
        });
        choice = choices.length === 0
          ? current.oneOf[0]
          : __typia_transform_randomPick._randomPick(choices);
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
        return __typia_transform_randomBoolean._randomBoolean();
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
        if (typeof generator?.array === "function") {
          const custom = generator.array({
            ...current,
            element: (index, total) => __random(current.items ?? {}, components, generator, depth + 1),
          });
          if (Array.isArray(custom)) return custom;
        }
        return depth > 3
          ? []
          : __typia_transform_randomArray._randomArray({
              ...current,
              element: (index, total) => __random(current.items ?? {}, components, generator, depth + 1),
            });
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
})()`
}
