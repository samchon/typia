package factories

import (
	"fmt"
	"math"
	"sort"
	"strings"

	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
	nativeprotobuf "github.com/samchon/typia/packages/typia/native/core/schemas/protobuf"
)

type protobufFactoryNamespace struct{}

var ProtobufFactory = protobufFactoryNamespace{}

type ProtobufFactory_IProps struct {
	Method      string
	Checker     *shimchecker.Checker
	Transformer any
	Components  *schemametadata.MetadataCollection
	Type        *shimchecker.Type
}

func (protobufFactoryNamespace) Metadata(props ProtobufFactory_IProps) *schemametadata.MetadataSchema {
	result := MetadataFactory.Analyze(MetadataFactory_IProps{
		Checker:     props.Checker,
		Transformer: props.Transformer,
		Options: MetadataFactory_IOptions{
			Escape:   false,
			Constant: true,
			Absorb:   true,
			Validate: protobufFactory_validate(),
		},
		Components: props.Components,
		Type:       props.Type,
	})
	if result.Success == false {
		panic(nativecontext.TransformerError_from(struct {
			Code   string
			Errors []nativecontext.TransformerError_MetadataFactory_IError
		}{
			Code:   "typia.protobuf." + props.Method,
			Errors: protobufFactory_errors(result.Errors),
		}))
	}
	return result.Data
}

func (protobufFactoryNamespace) EmplaceObject(object *schemametadata.MetadataObjectType) {
	for _, property := range object.Properties {
		protobufFactory_emplaceProperty(property)
	}
	properties := []*nativeprotobuf.IProtobufProperty{}
	for _, property := range object.Properties {
		if property.Of_protobuf_ != nil {
			properties = append(properties, property.Of_protobuf_)
		}
	}
	unique := map[int]bool{}
	for _, property := range properties {
		if property.Fixed == false {
			continue
		}
		for _, union := range property.Union {
			if index := protobufFactory_propertyIndex(union); index != nil {
				unique[*index] = true
			}
		}
	}
	index := 1
	for _, schema := range properties {
		if schema.Fixed {
			for _, union := range schema.Union {
				if next := protobufFactory_propertyIndex(union); next != nil && *next >= index {
					index = *next + 1
				}
			}
			continue
		}
		for _, union := range schema.Union {
			for unique[index] {
				index++
			}
			protobufFactory_setPropertyIndex(union, index)
			unique[index] = true
		}
		index++
	}
}

func protobufFactory_emplaceProperty(prop *schemametadata.MetadataProperty) {
	union := []nativeprotobuf.IProtobufPropertyType{}
	for _, native := range prop.Value.Natives {
		if native.Name == "Uint8Array" {
			union = append(union, &nativeprotobuf.IProtobufPropertyType_IByte{
				IProtobufSchema_IByte: nativeprotobuf.IProtobufSchema_IByte{Type: "bytes"},
				Index:                 protobufFactory_getSequence(protobufFactory_firstTagRow(native.Tags)),
			})
		}
	}
	union = append(union, protobufFactory_emplaceAtomic(prop.Value)...)
	for _, array := range prop.Value.Arrays {
		union = append(union, &nativeprotobuf.IProtobufPropertyType_IArray{
			IProtobufSchema_IArray: nativeprotobuf.IProtobufSchema_IArray{
				Type:  "array",
				Array: array.Type,
				Value: protobufFactory_emplaceSchema(array.Type.Value),
			},
			Index: protobufFactory_getSequence(protobufFactory_firstTagRow(array.Tags)),
		})
	}
	for _, obj := range prop.Value.Objects {
		if protobufFactory_isDynamicObject(obj.Type) {
			union = append(union, &nativeprotobuf.IProtobufPropertyType_IMap{
				IProtobufSchema_IMap: nativeprotobuf.IProtobufSchema_IMap{
					Type:  "map",
					Map:   obj.Type,
					Key:   protobufFactory_emplaceSchema(obj.Type.Properties[0].Key),
					Value: protobufFactory_emplaceSchema(obj.Type.Properties[0].Value),
				},
				Index: protobufFactory_getSequence(protobufFactory_firstTagRow(obj.Tags)),
			})
		} else {
			union = append(union, &nativeprotobuf.IProtobufPropertyType_IObject{
				IProtobufSchema_IObject: nativeprotobuf.IProtobufSchema_IObject{Type: "object", Object: obj.Type},
				Index:                   protobufFactory_getSequence(protobufFactory_firstTagRow(obj.Tags)),
			})
		}
	}
	for _, entry := range prop.Value.Maps {
		union = append(union, &nativeprotobuf.IProtobufPropertyType_IMap{
			IProtobufSchema_IMap: nativeprotobuf.IProtobufSchema_IMap{
				Type:  "map",
				Map:   entry,
				Key:   protobufFactory_emplaceSchema(entry.Key),
				Value: protobufFactory_emplaceSchema(entry.Value),
			},
			Index: protobufFactory_getSequence(protobufFactory_firstTagRow(entry.Tags)),
		})
	}
	fixed := true
	for _, elem := range union {
		if protobufFactory_propertyIndex(elem) == nil {
			fixed = false
			break
		}
	}
	prop.Of_protobuf_ = &nativeprotobuf.IProtobufProperty{
		Union: union,
		Fixed: fixed,
	}
}

func protobufFactory_emplaceSchema(metadata *schemametadata.MetadataSchema) nativeprotobuf.IProtobufSchema {
	for _, native := range metadata.Natives {
		if native.Name == "Uint8Array" {
			return nativeprotobuf.IProtobufSchema_IByte{Type: "bytes"}
		}
	}
	atomic := protobufFactory_emplaceAtomic(metadata)
	if len(atomic) != 0 {
		return atomic[0]
	}
	for _, array := range metadata.Arrays {
		return nativeprotobuf.IProtobufSchema_IArray{
			Type:  "array",
			Array: array.Type,
			Value: protobufFactory_emplaceSchema(array.Type.Value),
		}
	}
	for _, obj := range metadata.Objects {
		if protobufFactory_isDynamicObject(obj.Type) {
			return nativeprotobuf.IProtobufSchema_IMap{
				Type:  "map",
				Map:   obj.Type,
				Key:   protobufFactory_emplaceSchema(obj.Type.Properties[0].Key),
				Value: protobufFactory_emplaceSchema(obj.Type.Properties[0].Value),
			}
		}
		return nativeprotobuf.IProtobufSchema_IObject{Type: "object", Object: obj.Type}
	}
	for _, entry := range metadata.Maps {
		return nativeprotobuf.IProtobufSchema_IMap{
			Type:  "map",
			Map:   entry,
			Key:   protobufFactory_emplaceSchema(entry.Key),
			Value: protobufFactory_emplaceSchema(entry.Value),
		}
	}
	panic("Error on ProtobufFactory.emplaceSchema(): any type detected.")
}

func protobufFactory_emplaceAtomic(meta *schemametadata.MetadataSchema) []nativeprotobuf.IProtobufPropertyType {
	values := map[string]nativeprotobuf.IProtobufPropertyType{}
	for _, constant := range meta.Constants {
		if constant.Type == "boolean" {
			values["bool"] = &nativeprotobuf.IProtobufPropertyType_IBoolean{
				IProtobufSchema_IBoolean: nativeprotobuf.IProtobufSchema_IBoolean{Type: "bool"},
				Index:                    protobufFactory_getSequence(protobufFactory_firstTags(constant.Values)),
			}
		} else if constant.Type == "bigint" {
			init := protobufFactory_getBigintType(protobufFactory_constantValues(constant.Values))
			for _, value := range constant.Values {
				protobufFactory_emplaceBigint(values, value.Tags, init)
			}
		} else if constant.Type == "number" {
			init := protobufFactory_getNumberType(protobufFactory_constantValues(constant.Values))
			for _, value := range constant.Values {
				protobufFactory_emplaceNumber(values, value.Tags, init)
			}
		} else if constant.Type == "string" {
			values["string"] = &nativeprotobuf.IProtobufPropertyType_IString{
				IProtobufSchema_IString: nativeprotobuf.IProtobufSchema_IString{Type: "string"},
				Index:                   protobufFactory_getSequence(protobufFactory_firstTags(constant.Values)),
			}
		}
	}
	if len(meta.Templates) != 0 {
		values["string"] = &nativeprotobuf.IProtobufPropertyType_IString{
			IProtobufSchema_IString: nativeprotobuf.IProtobufSchema_IString{Type: "string"},
			Index:                   protobufFactory_getSequence(protobufFactory_firstTagRow(meta.Templates[0].Tags)),
		}
	}
	for _, atomic := range meta.Atomics {
		if atomic.Type == "boolean" {
			values["bool"] = &nativeprotobuf.IProtobufPropertyType_IBoolean{
				IProtobufSchema_IBoolean: nativeprotobuf.IProtobufSchema_IBoolean{Type: "bool"},
				Index:                    protobufFactory_getSequence(protobufFactory_firstTagRow(atomic.Tags)),
			}
		} else if atomic.Type == "bigint" {
			protobufFactory_emplaceBigint(values, atomic.Tags, "int64")
		} else if atomic.Type == "number" {
			protobufFactory_emplaceNumber(values, atomic.Tags, "double")
		} else if atomic.Type == "string" {
			values["string"] = &nativeprotobuf.IProtobufPropertyType_IString{
				IProtobufSchema_IString: nativeprotobuf.IProtobufSchema_IString{Type: "string"},
				Index:                   protobufFactory_getSequence(protobufFactory_firstTagRow(atomic.Tags)),
			}
		}
	}
	keys := make([]string, 0, len(values))
	for key := range values {
		keys = append(keys, key)
	}
	sort.Slice(keys, func(i, j int) bool {
		return protobufFactory_compare(keys[i], keys[j]) < 0
	})
	output := make([]nativeprotobuf.IProtobufPropertyType, 0, len(keys))
	for _, key := range keys {
		output = append(output, values[key])
	}
	return output
}

func protobufFactory_emplaceBigint(output map[string]nativeprotobuf.IProtobufPropertyType, tags [][]schemametadata.IMetadataTypeTag, init string) {
	if len(tags) == 0 {
		output[init] = &nativeprotobuf.IProtobufPropertyType_IBigint{
			IProtobufSchema_IBigint: nativeprotobuf.IProtobufSchema_IBigint{Type: "bigint", Name: init},
			Index:                   nil,
		}
		return
	}
	for _, row := range tags {
		value := init
		for _, tag := range row {
			if tag.Kind == "type" && (tag.Value == "int64" || tag.Value == "uint64") {
				value = fmt.Sprint(tag.Value)
				break
			}
		}
		output[init] = &nativeprotobuf.IProtobufPropertyType_IBigint{
			IProtobufSchema_IBigint: nativeprotobuf.IProtobufSchema_IBigint{Type: "bigint", Name: value},
			Index:                   protobufFactory_getSequence(row),
		}
	}
}

func protobufFactory_emplaceNumber(output map[string]nativeprotobuf.IProtobufPropertyType, tags [][]schemametadata.IMetadataTypeTag, init string) {
	if len(tags) == 0 {
		output[init] = &nativeprotobuf.IProtobufPropertyType_INumber{
			IProtobufSchema_INumber: nativeprotobuf.IProtobufSchema_INumber{Type: "number", Name: init},
			Index:                   nil,
		}
		return
	}
	for _, row := range tags {
		value := init
		for _, tag := range row {
			if tag.Kind != "type" {
				continue
			}
			str := fmt.Sprint(tag.Value)
			if str == "int32" || str == "uint32" || str == "int64" || str == "uint64" || str == "float" || str == "double" {
				value = str
				break
			}
		}
		output[value] = &nativeprotobuf.IProtobufPropertyType_INumber{
			IProtobufSchema_INumber: nativeprotobuf.IProtobufSchema_INumber{Type: "number", Name: value},
			Index:                   protobufFactory_getSequence(row),
		}
	}
}

func protobufFactory_validate() MetadataFactory_Validator {
	visited := map[*schemametadata.MetadataObjectType]bool{}
	return func(props struct {
		Metadata *schemametadata.MetadataSchema
		Explore  MetadataFactory_IExplore
		Top      *schemametadata.MetadataSchema
	}) []string {
		errors := []string{}
		insert := func(msg string) { errors = append(errors, msg) }
		if props.Explore.Top == true {
			onlyObject := props.Metadata.Size() == 1 &&
				len(props.Metadata.Objects) == 1 &&
				props.Metadata.IsRequired() == true &&
				props.Metadata.Nullable == false
			if onlyObject && len(props.Metadata.Objects) != 0 {
				for _, property := range props.Metadata.Objects[0].Type.Properties {
					if property.Key.IsSoleLiteral() == false {
						onlyObject = false
						break
					}
				}
			}
			if onlyObject == false {
				insert("target type must be a sole and static object type")
			}
		}
		for _, obj := range props.Metadata.Objects {
			if visited[obj.Type] {
				continue
			}
			visited[obj.Type] = true
			protobufFactory_validateObject(obj.Type, &errors)
			func() {
				defer func() { _ = recover() }()
				ProtobufFactory.EmplaceObject(obj.Type)
			}()
		}
		noSupport := func(msg string) { insert("does not support " + msg) }
		if props.Metadata.Any {
			noSupport("any type")
		}
		if len(props.Metadata.Functions) != 0 {
			noSupport("functional type")
		}
		if len(props.Metadata.Tuples) != 0 {
			noSupport("tuple type")
		}
		if len(props.Metadata.Sets) != 0 {
			noSupport("Set type")
		}
		for _, native := range props.Metadata.Natives {
			if native.Name == "Uint8Array" {
				continue
			}
			if instead, ok := protobufFactory_BANNED_NATIVE_TYPES[native.Name]; ok {
				noSupport(native.Name + " type. Use " + instead + " type instead.")
			} else {
				noSupport(native.Name + " type")
			}
		}
		if len(props.Metadata.Atomics) != 0 {
			numbers := protobufFactory_getNumbers(props.Metadata)
			bigints := protobufFactory_getBigints(props.Metadata)
			for _, typ := range []string{"int64", "uint64"} {
				if _, ok := numbers[typ]; ok {
					if _, found := bigints[typ]; found {
						insert("tags.Type<\"" + typ + "\"> cannot be used in both number and bigint types. Recommend to remove from number type")
					}
				}
			}
		}
		protobufFactory_validateShape(props.Metadata, noSupport)
		return errors
	}
}

func protobufFactory_validateShape(metadata *schemametadata.MetadataSchema, noSupport func(string)) {
	if len(metadata.Arrays) != 0 {
		for _, array := range metadata.Arrays {
			if len(array.Type.Value.Arrays) != 0 {
				noSupport("over two dimensional array type")
				break
			}
		}
		for _, array := range metadata.Arrays {
			if array.Type.Value.IsRequired() == false || array.Type.Value.Nullable {
				noSupport("optional type in array")
				break
			}
		}
		for _, array := range metadata.Arrays {
			if array.Type.Value.Size() > 1 && len(array.Type.Value.Constants) != 1 {
				noSupport("union type in array")
				break
			}
		}
		for _, array := range metadata.Arrays {
			if len(array.Type.Value.Maps) != 0 {
				noSupport("dynamic object in array")
				break
			}
			for _, obj := range array.Type.Value.Objects {
				if protobufFactory_isStaticObject(obj.Type) == false {
					noSupport("dynamic object in array")
					break
				}
			}
		}
		if metadata.Size() > 1 {
			noSupport("union type with array type")
		}
	}
	if len(metadata.Objects) != 0 {
		for _, obj := range metadata.Objects {
			if len(obj.Type.Properties) == 0 {
				noSupport("empty object type")
				break
			}
		}
		for _, obj := range metadata.Objects {
			dynamic := 0
			static := 0
			for _, property := range obj.Type.Properties {
				if property.Key.IsSoleLiteral() {
					static++
				} else {
					dynamic++
				}
			}
			if dynamic > 1 {
				noSupport("object type with multiple dynamic key typed properties. Keep only one.")
			}
			if static != 0 && dynamic != 0 {
				noSupport("object type with mixed static and dynamic key typed properties. Keep statics or dynamic only.")
			}
		}
		if protobufFactory_isDynamicObject(metadata.Objects[0].Type) {
			for _, property := range metadata.Objects[0].Type.Properties {
				if len(property.Value.Arrays) != 0 {
					noSupport("dynamic object with array value type")
					break
				}
				if protobufFactory_isUnion(property.Value) {
					noSupport("union type in dynamic property")
					break
				}
			}
			if metadata.Size() > 1 {
				noSupport("union type with dynamic object type")
			}
		}
	}
	if len(metadata.Maps) != 0 {
		for _, entry := range metadata.Maps {
			if protobufFactory_isUnion(entry.Key) {
				noSupport("union key typed map")
			}
			if len(protobufFactory_getAtomics(entry.Key)) != 1 {
				noSupport("non-atomic key typed map")
			}
			if entry.Key.IsRequired() == false || entry.Key.Nullable {
				noSupport("optional key typed map")
			}
			if len(entry.Value.Arrays) != 0 {
				noSupport("map type with array value type")
			}
			if protobufFactory_isUnion(entry.Value) {
				noSupport("union type in map value type")
			}
		}
		if metadata.Size() > 1 {
			noSupport("union type with map type")
		}
	}
}

func protobufFactory_validateObject(object *schemametadata.MetadataObjectType, errors *[]string) {
	for _, property := range object.Properties {
		protobufFactory_validateProperty(property.Value, errors)
	}
	entire := map[int]string{}
	for _, property := range object.Properties {
		local := map[int]bool{}
		tagger := func(matrix [][]schemametadata.IMetadataTypeTag) {
			for _, tags := range matrix {
				if value := protobufFactory_getSequence(tags); value != nil {
					local[*value] = true
				}
			}
		}
		for _, c := range property.Value.Constants {
			for _, v := range c.Values {
				tagger(v.Tags)
			}
		}
		for _, a := range property.Value.Atomics {
			tagger(a.Tags)
		}
		for _, t := range property.Value.Templates {
			tagger(t.Tags)
		}
		for _, o := range property.Value.Objects {
			tagger(o.Tags)
		}
		for _, a := range property.Value.Arrays {
			tagger(a.Tags)
		}
		for sequence := range local {
			name := ""
			if property.Key.GetSoleLiteral() != nil {
				name = *property.Key.GetSoleLiteral()
			}
			if prev, ok := entire[sequence]; ok {
				*errors = append(*errors, fmt.Sprintf("The Sequence<%d> tag is duplicated in two properties (%q and %q)", sequence, prev, name))
			} else {
				entire[sequence] = name
			}
		}
	}
}

func protobufFactory_validateProperty(metadata *schemametadata.MetadataSchema, errors *[]string) {
	sequences := map[int]bool{}
	add := func(value int) bool {
		if sequences[value] {
			return false
		}
		sequences[value] = true
		return true
	}
	protobufFactory_validateBooleanSequence(metadata, errors, add)
	protobufFactory_validateNumericSequences(metadata, errors, add, "bigint", "int64", protobufFactory_BIGINT_TYPES)
	protobufFactory_validateNumericSequences(metadata, errors, add, "number", "double", protobufFactory_NUMBER_TYPES)
	protobufFactory_validateStringSequence(metadata, errors, add)
	for _, array := range metadata.Arrays {
		protobufFactory_validateInstanceSequence("array", array.Tags, errors, add)
	}
	for _, object := range metadata.Objects {
		protobufFactory_validateInstanceSequence("object", object.Tags, errors, add)
	}
	for _, entry := range metadata.Maps {
		protobufFactory_validateInstanceSequence("map", entry.Tags, errors, add)
	}
	for _, native := range metadata.Natives {
		if native.Name == "Uint8Array" {
			protobufFactory_validateInstanceSequence("Uint8Array", native.Tags, errors, add)
		}
	}
}

func protobufFactory_validateBooleanSequence(metadata *schemametadata.MetadataSchema, errors *[]string, add func(int) bool) {
	unique, expected, actual := map[int]bool{}, 0, 0
	emplace := func(matrix [][]schemametadata.IMetadataTypeTag) {
		for _, tags := range matrix {
			for _, tag := range tags {
				if sequence := protobufFactory_getSequence([]schemametadata.IMetadataTypeTag{tag}); sequence != nil {
					unique[*sequence] = true
					actual++
				}
				expected++
			}
		}
	}
	for _, atomic := range metadata.Atomics {
		if atomic.Type == "boolean" {
			emplace(atomic.Tags)
		}
	}
	for _, constant := range metadata.Constants {
		if constant.Type == "boolean" {
			for _, value := range constant.Values {
				emplace(value.Tags)
			}
		}
	}
	protobufFactory_validateUniqueSequence("boolean type", unique, expected, actual, errors, add)
}

func protobufFactory_validateNumericSequences(metadata *schemametadata.MetadataSchema, errors *[]string, add func(int) bool, typ string, def string, categories map[string]bool) {
	foundCategories := map[string]bool{}
	getType := func(tags []schemametadata.IMetadataTypeTag) string {
		for _, tag := range tags {
			if tag.Kind == "type" && categories[fmt.Sprint(tag.Value)] {
				return fmt.Sprint(tag.Value)
			}
		}
		return def
	}
	for _, atomic := range metadata.Atomics {
		if atomic.Type == typ {
			for _, tags := range atomic.Tags {
				foundCategories[getType(tags)] = true
			}
		}
	}
	for _, constant := range metadata.Constants {
		if constant.Type == typ {
			for _, value := range constant.Values {
				for _, tags := range value.Tags {
					foundCategories[getType(tags)] = true
				}
			}
		}
	}
	for category := range foundCategories {
		unique, expected, actual := map[int]bool{}, 0, 0
		emplace := func(tags []schemametadata.IMetadataTypeTag) {
			if sequence := protobufFactory_getSequence(tags); sequence != nil {
				unique[*sequence] = true
				actual++
			}
			expected++
		}
		for _, atomic := range metadata.Atomics {
			if atomic.Type == typ {
				for _, tags := range atomic.Tags {
					if getType(tags) == category {
						emplace(tags)
					}
				}
			}
		}
		for _, constant := range metadata.Constants {
			if constant.Type == typ {
				for _, value := range constant.Values {
					for _, tags := range value.Tags {
						if getType(tags) == category {
							emplace(tags)
						}
					}
				}
			}
		}
		protobufFactory_validateUniqueSequence(typ+" type", unique, expected, actual, errors, add)
	}
}

func protobufFactory_validateStringSequence(metadata *schemametadata.MetadataSchema, errors *[]string, add func(int) bool) {
	unique, expected, actual := map[int]bool{}, 0, 0
	emplace := func(matrix [][]schemametadata.IMetadataTypeTag) {
		for _, tags := range matrix {
			for _, tag := range tags {
				if sequence := protobufFactory_getSequence([]schemametadata.IMetadataTypeTag{tag}); sequence != nil {
					unique[*sequence] = true
					actual++
				}
				expected++
			}
		}
	}
	for _, atomic := range metadata.Atomics {
		if atomic.Type == "string" {
			emplace(atomic.Tags)
		}
	}
	for _, constant := range metadata.Constants {
		if constant.Type == "string" {
			for _, value := range constant.Values {
				emplace(value.Tags)
			}
		}
	}
	for _, template := range metadata.Templates {
		emplace(template.Tags)
	}
	protobufFactory_validateUniqueSequence("string type", unique, expected, actual, errors, add)
}

func protobufFactory_validateInstanceSequence(typ string, tags [][]schemametadata.IMetadataTypeTag, errors *[]string, add func(int) bool) {
	unique := map[int]bool{}
	count := 0
	for _, row := range tags {
		if value := protobufFactory_getSequence(row); value != nil {
			unique[*value] = true
			count++
		}
	}
	if len(unique) != 0 && count != len(tags) {
		*errors = append(*errors, "The sequence tag must be declared in every union type members")
	} else if len(unique) > 1 {
		label := "object"
		if typ == "array" {
			label = "an array"
		}
		*errors = append(*errors, "The sequence tag value must be the same in "+label+" type.")
	} else if len(unique) == 1 {
		for value := range unique {
			if add(value) == false {
				*errors = append(*errors, fmt.Sprintf("The sequence tag value %d in %s type is duplicated with other types", value, typ))
			}
		}
	}
}

func protobufFactory_validateUniqueSequence(label string, unique map[int]bool, expected int, actual int, errors *[]string, add func(int) bool) {
	if len(unique) != 0 && actual != expected {
		*errors = append(*errors, "The sequence tag must be declared in every union type members")
	} else if len(unique) > 1 {
		*errors = append(*errors, "The sequence tag value must be the same in "+label+" (including literal types)")
	} else if len(unique) == 1 {
		for value := range unique {
			if add(value) == false {
				*errors = append(*errors, fmt.Sprintf("The sequence tag value %d in %s is duplicated with other types", value, label))
			}
		}
	}
}

func protobufFactory_propertyIndex(prop nativeprotobuf.IProtobufPropertyType) *int {
	switch v := prop.(type) {
	case *nativeprotobuf.IProtobufPropertyType_IByte:
		return v.Index
	case *nativeprotobuf.IProtobufPropertyType_IBoolean:
		return v.Index
	case *nativeprotobuf.IProtobufPropertyType_IBigint:
		return v.Index
	case *nativeprotobuf.IProtobufPropertyType_INumber:
		return v.Index
	case *nativeprotobuf.IProtobufPropertyType_IString:
		return v.Index
	case *nativeprotobuf.IProtobufPropertyType_IArray:
		return v.Index
	case *nativeprotobuf.IProtobufPropertyType_IObject:
		return v.Index
	case *nativeprotobuf.IProtobufPropertyType_IMap:
		return v.Index
	}
	return nil
}

func protobufFactory_setPropertyIndex(prop nativeprotobuf.IProtobufPropertyType, index int) {
	switch v := prop.(type) {
	case *nativeprotobuf.IProtobufPropertyType_IByte:
		v.Index = &index
	case *nativeprotobuf.IProtobufPropertyType_IBoolean:
		v.Index = &index
	case *nativeprotobuf.IProtobufPropertyType_IBigint:
		v.Index = &index
	case *nativeprotobuf.IProtobufPropertyType_INumber:
		v.Index = &index
	case *nativeprotobuf.IProtobufPropertyType_IString:
		v.Index = &index
	case *nativeprotobuf.IProtobufPropertyType_IArray:
		v.Index = &index
	case *nativeprotobuf.IProtobufPropertyType_IObject:
		v.Index = &index
	case *nativeprotobuf.IProtobufPropertyType_IMap:
		v.Index = &index
	}
}

func protobufFactory_firstTagRow(tags [][]schemametadata.IMetadataTypeTag) []schemametadata.IMetadataTypeTag {
	if len(tags) == 0 {
		return []schemametadata.IMetadataTypeTag{}
	}
	return tags[0]
}

func protobufFactory_getSequence(tags []schemametadata.IMetadataTypeTag) *int {
	for _, tag := range tags {
		if tag.Kind != "sequence" {
			continue
		}
		schema, ok := tag.Schema.(map[string]any)
		if ok == false {
			continue
		}
		raw, ok := schema["x-protobuf-sequence"]
		if ok == false {
			continue
		}
		switch value := raw.(type) {
		case int:
			return &value
		case int64:
			next := int(value)
			return &next
		case float64:
			next := int(value)
			return &next
		case string:
			next := 0
			if _, err := fmt.Sscan(value, &next); err == nil {
				return &next
			}
		}
	}
	return nil
}

func protobufFactory_isStaticObject(obj *schemametadata.MetadataObjectType) bool {
	if obj == nil || len(obj.Properties) == 0 {
		return false
	}
	for _, property := range obj.Properties {
		if property.Key.IsSoleLiteral() == false {
			return false
		}
	}
	return true
}

func protobufFactory_isUnion(meta *schemametadata.MetadataSchema) bool {
	return protobufFactory_size(meta) > 1
}

func protobufFactory_size(meta *schemametadata.MetadataSchema) int {
	if meta == nil {
		return 0
	}
	return len(protobufFactory_getAtomics(meta)) +
		len(meta.Arrays) +
		len(meta.Tuples) +
		len(meta.Natives) +
		len(meta.Objects) +
		len(meta.Maps)
}

func protobufFactory_getAtomics(meta *schemametadata.MetadataSchema) map[string]*int {
	output := map[string]*int{}
	for _, constant := range meta.Constants {
		if constant.Type == "boolean" {
			output["bool"] = protobufFactory_getSequence(protobufFactory_firstTags(constant.Values))
		} else if constant.Type == "bigint" {
			init := protobufFactory_getBigintType(protobufFactory_constantValues(constant.Values))
			protobufFactory_decodeBigint(output, constant.Values, init)
		} else if constant.Type == "number" {
			init := protobufFactory_getNumberType(protobufFactory_constantValues(constant.Values))
			protobufFactory_decodeNumber(output, constant.Values, init)
		} else if constant.Type == "string" {
			output["string"] = protobufFactory_getSequence(protobufFactory_firstTags(constant.Values))
		}
	}
	if len(meta.Templates) != 0 {
		output["string"] = protobufFactory_getSequence(protobufFactory_firstTagRow(meta.Templates[0].Tags))
	}
	for _, atomic := range meta.Atomics {
		if atomic.Type == "boolean" {
			output["bool"] = protobufFactory_getSequence(protobufFactory_firstTagRow(atomic.Tags))
		} else if atomic.Type == "bigint" {
			protobufFactory_decodeBigintTags(output, atomic.Tags, "int64")
		} else if atomic.Type == "number" {
			protobufFactory_decodeNumberTags(output, atomic.Tags, "double")
		} else if atomic.Type == "string" {
			output["string"] = protobufFactory_getSequence(protobufFactory_firstTagRow(atomic.Tags))
		}
	}
	return output
}

func protobufFactory_getNumbers(meta *schemametadata.MetadataSchema) map[string]*int {
	output := map[string]*int{}
	for _, constant := range meta.Constants {
		if constant.Type == "number" {
			init := protobufFactory_getNumberType(protobufFactory_constantValues(constant.Values))
			protobufFactory_decodeNumber(output, constant.Values, init)
		}
	}
	for _, atomic := range meta.Atomics {
		if atomic.Type == "number" {
			protobufFactory_decodeNumberTags(output, atomic.Tags, "double")
		}
	}
	return output
}

func protobufFactory_getBigints(meta *schemametadata.MetadataSchema) map[string]*int {
	output := map[string]*int{}
	for _, constant := range meta.Constants {
		if constant.Type == "bigint" {
			init := protobufFactory_getBigintType(protobufFactory_constantValues(constant.Values))
			protobufFactory_decodeBigint(output, constant.Values, init)
		}
	}
	for _, atomic := range meta.Atomics {
		if atomic.Type == "bigint" {
			protobufFactory_decodeBigintTags(output, atomic.Tags, "int64")
		}
	}
	return output
}

func protobufFactory_decodeBigint(output map[string]*int, values []*schemametadata.MetadataConstantValue, init string) {
	for _, value := range values {
		protobufFactory_decodeBigintTags(output, value.Tags, init)
	}
}

func protobufFactory_decodeNumber(output map[string]*int, values []*schemametadata.MetadataConstantValue, init string) {
	for _, value := range values {
		protobufFactory_decodeNumberTags(output, value.Tags, init)
	}
}

func protobufFactory_decodeBigintTags(output map[string]*int, tags [][]schemametadata.IMetadataTypeTag, init string) {
	if len(tags) == 0 {
		output[init] = nil
		return
	}
	for _, row := range tags {
		value := init
		for _, tag := range row {
			if tag.Kind == "type" && (tag.Value == "int64" || tag.Value == "uint64") {
				value = fmt.Sprint(tag.Value)
				break
			}
		}
		output[value] = protobufFactory_getSequence(row)
	}
}

func protobufFactory_decodeNumberTags(output map[string]*int, tags [][]schemametadata.IMetadataTypeTag, init string) {
	if len(tags) == 0 {
		output[init] = nil
		return
	}
	for _, row := range tags {
		value := init
		for _, tag := range row {
			if tag.Kind != "type" {
				continue
			}
			str := fmt.Sprint(tag.Value)
			if protobufFactory_NUMBER_TYPES[str] {
				value = str
				break
			}
		}
		output[value] = protobufFactory_getSequence(row)
	}
}

func protobufFactory_compare(x string, y string) int {
	return protobufFactory_ATOMIC_ORDER[x] - protobufFactory_ATOMIC_ORDER[y]
}

func protobufFactory_firstTags(values []*schemametadata.MetadataConstantValue) []schemametadata.IMetadataTypeTag {
	if len(values) == 0 {
		return []schemametadata.IMetadataTypeTag{}
	}
	return protobufFactory_firstTagRow(values[0].Tags)
}

func protobufFactory_constantValues(values []*schemametadata.MetadataConstantValue) []any {
	output := make([]any, 0, len(values))
	for _, value := range values {
		output = append(output, value.Value)
	}
	return output
}

func protobufFactory_getBigintType(values []any) string {
	for _, value := range values {
		if strings.HasPrefix(fmt.Sprint(value), "-") {
			return "int64"
		}
	}
	return "uint64"
}

func protobufFactory_getNumberType(values []any) string {
	integers := true
	int32s := true
	for _, value := range values {
		number := protobufFactory_toFloat(value)
		if math.Floor(number) != number {
			integers = false
			break
		}
		if -2147483648 <= number && number <= 2147483647 {
			continue
		}
		int32s = false
	}
	if integers == false {
		return "double"
	}
	if int32s {
		return "int32"
	}
	return "int64"
}

func protobufFactory_toFloat(value any) float64 {
	switch v := value.(type) {
	case float64:
		return v
	case float32:
		return float64(v)
	case int:
		return float64(v)
	case int64:
		return float64(v)
	case uint64:
		return float64(v)
	default:
		var out float64
		fmt.Sscan(fmt.Sprint(value), &out)
		return out
	}
}

func protobufFactory_isDynamicObject(obj *schemametadata.MetadataObjectType) bool {
	return obj != nil && len(obj.Properties) != 0 && obj.Properties[0].Key.IsSoleLiteral() == false
}

func protobufFactory_errors(errors []MetadataFactory_IError) []nativecontext.TransformerError_MetadataFactory_IError {
	output := make([]nativecontext.TransformerError_MetadataFactory_IError, 0, len(errors))
	for _, err := range errors {
		output = append(output, nativecontext.TransformerError_MetadataFactory_IError{
			Name: err.Name,
			Explore: nativecontext.TransformerError_MetadataFactory_IExplore{
				Object:    err.Explore.Object,
				Property:  err.Explore.Property,
				Parameter: err.Explore.Parameter,
				Output:    err.Explore.Output,
			},
			Messages: append([]string{}, err.Messages...),
		})
	}
	return output
}

var protobufFactory_BANNED_NATIVE_TYPES = map[string]string{
	"Date":              "string",
	"Boolean":           "boolean",
	"BigInt":            "bigint",
	"Number":            "number",
	"String":            "string",
	"Buffer":            "Uint8Array",
	"Uint8ClampedArray": "Uint8Array",
	"Uint16Array":       "Uint8Array",
	"Uint32Array":       "Uint8Array",
	"BigUint64Array":    "Uint8Array",
	"Int8Array":         "Uint8Array",
	"Int16Array":        "Uint8Array",
	"Int32Array":        "Uint8Array",
	"BigInt64Array":     "Uint8Array",
	"Float32Array":      "Uint8Array",
	"Float64Array":      "Uint8Array",
	"DataView":          "Uint8Array",
	"ArrayBuffer":       "Uint8Array",
	"SharedArrayBuffer": "Uint8Array",
	"WeakSet":           "Array",
	"WeakMap":           "Map",
}

var protobufFactory_NUMBER_TYPES = map[string]bool{
	"int32": true, "uint32": true, "int64": true, "uint64": true, "float": true, "double": true,
}
var protobufFactory_BIGINT_TYPES = map[string]bool{"int64": true, "uint64": true}
var protobufFactory_ATOMIC_ORDER = map[string]int{
	"bool":   0,
	"int32":  1,
	"uint32": 2,
	"int64":  3,
	"uint64": 4,
	"float":  5,
	"double": 6,
	"string": 7,
}
