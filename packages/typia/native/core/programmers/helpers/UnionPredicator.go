package helpers

import nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

type unionPredicatorNamespace struct{}

var UnionPredicator = unionPredicatorNamespace{}

type UnionPredicator_ISpecialized struct {
	Index    int
	Object   *nativemetadata.MetadataObjectType
	Property *nativemetadata.MetadataProperty
	Neighbor bool
}

type unionPredicator_ISpecializedProperty struct {
	Property *nativemetadata.MetadataProperty
	Neighbor bool
}

func (unionPredicatorNamespace) Object(objects []*nativemetadata.MetadataObjectType) []UnionPredicator_ISpecialized {
	matrix := map[string][]*nativemetadata.MetadataProperty{}
	for _, obj := range objects {
		for _, prop := range obj.Properties {
			key := prop.Key.GetSoleLiteral()
			if key == nil {
				continue
			}
			if _, ok := matrix[*key]; ok == false {
				matrix[*key] = make([]*nativemetadata.MetadataProperty, len(objects))
			}
		}
	}
	for i, obj := range objects {
		for _, prop := range obj.Properties {
			key := prop.Key.GetSoleLiteral()
			if key != nil {
				matrix[*key][i] = prop
			}
		}
	}

	output := []UnionPredicator_ISpecialized{}
	for i, obj := range objects {
		children := []unionPredicator_ISpecializedProperty{}
		for _, prop := range obj.Properties {
			if prop.Value.IsRequired() == false {
				continue
			}
			key := prop.Key.GetSoleLiteral()
			if key == nil {
				continue
			}
			neighbors := []*nativemetadata.MetadataProperty{}
			for k, oppo := range matrix[*key] {
				if i != k && oppo != nil {
					neighbors = append(neighbors, oppo)
				}
			}
			unique := len(neighbors) == 0
			if unique == false {
				unique = true
				for _, neighbor := range neighbors {
					if nativemetadata.MetadataSchema_intersects(prop.Value, neighbor.Value) {
						unique = false
						break
					}
				}
			}
			if unique {
				children = append(children, unionPredicator_ISpecializedProperty{
					Property: prop,
					Neighbor: len(neighbors) != 0,
				})
			}
		}
		if len(children) == 0 {
			continue
		}
		top := children[0]
		for _, child := range children {
			if child.Property.Value.IsConstant() {
				top = child
				break
			}
		}
		output = append(output, UnionPredicator_ISpecialized{
			Index:    i,
			Object:   obj,
			Property: top.Property,
			Neighbor: top.Neighbor,
		})
	}
	return output
}
