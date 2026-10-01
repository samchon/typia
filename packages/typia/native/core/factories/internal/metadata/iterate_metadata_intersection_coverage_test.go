//go:build typia_native_internal
// +build typia_native_internal

package metadata

import (
	"testing"

	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestIterateMetadataIntersectionCoverage exercises intersection tag helpers.
//
// Intersection handling treats `typia.tag` object shapes as metadata tags only
// when the wrapper property and nested tag object have the exact required
// structure. These helpers are pure schema predicates, so direct metadata
// fixtures can cover both accepted and rejected tag shapes.
//
// 1. Build a complete `typia.tag` object and verify it is recognized.
// 2. Reject nil, empty, required, and incomplete tag object shapes.
// 3. Verify analyzer dispatch with and without a registered tag analyzer.
// 4. Restore the package analyzer after the scenario.
//
// @evidence contracts/testing.md#behavioral-verification The typia.tag shape predicates run on a complete tag object, nil, empty, required and incomplete shapes, and the analyzer hook runs with nil.
// @evidence contracts/testing.md#independent-expectations The exact wrapper and nested tag structure is the authored specification of an acceptable tag object.
// @evidence contracts/testing.md#distinguishing-cases One accepted shape and four rejected shapes; the analyzer-props checks are presence checks.
// @evidence contracts/testing.md#execution-ownership The typia_native_internal Go command (go -C packages/typia/test test -tags typia_native_internal ../native/...) runs this same-package Test function in process. The tagged test calls pure predicates on constructed metadata with no program load or process.
func TestIterateMetadataIntersectionCoverage(t *testing.T) {
	literal := func(value string) *schemametadata.MetadataSchema {
		meta := schemametadata.MetadataSchema_initialize()
		meta.Constants = append(meta.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
			Type: "string",
			Values: []*schemametadata.MetadataConstantValue{
				schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: value}),
			},
		}))
		return meta
	}
	tagObject := func(keys ...string) *schemametadata.MetadataObjectType {
		properties := make([]*schemametadata.MetadataProperty, 0, len(keys))
		for _, key := range keys {
			properties = append(properties, schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
				Key:   literal(key),
				Value: literal(key + "-value"),
			}))
		}
		return schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
			Name:       "Tag",
			Properties: properties,
		})
	}
	wrapper := func(value *schemametadata.MetadataSchema) *schemametadata.MetadataObjectType {
		return schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
			Name: "Wrapper",
			Properties: []*schemametadata.MetadataProperty{
				schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
					Key:   literal("typia.tag"),
					Value: value,
				}),
			},
		})
	}
	value := schemametadata.MetadataSchema_initialize()
	value.Required = false
	value.Objects = append(value.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{
		Type: tagObject("target", "kind", "value"),
	}))
	if !iterate_metadata_intersection_is_type_tag(wrapper(value)) {
		t.Fatal("complete typia tag object should be recognized")
	}
	if iterate_metadata_intersection_is_type_tag(nil) ||
		iterate_metadata_intersection_is_type_tag(schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{Name: "Empty"})) {
		t.Fatal("nil and empty objects should not be recognized as type tags")
	}
	required := schemametadata.MetadataSchema_initialize()
	required.Objects = append(required.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{
		Type: tagObject("target", "kind", "value"),
	}))
	incomplete := schemametadata.MetadataSchema_initialize()
	incomplete.Required = false
	incomplete.Objects = append(incomplete.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{
		Type: tagObject("target", "kind"),
	}))
	if iterate_metadata_intersection_is_type_tag(wrapper(required)) ||
		iterate_metadata_intersection_is_type_tag(wrapper(incomplete)) {
		t.Fatal("required or incomplete tag objects should be rejected")
	}

	previous := MetadataTypeTagAnalyzer
	defer func() {
		MetadataTypeTagAnalyzer = previous
	}()
	MetadataTypeTagAnalyzer = nil
	if tags := iterate_metadata_intersection_analyze_type_tags(IMetadataIteratorProps{}, []*schemametadata.MetadataObjectType{tagObject("target", "kind", "value")}, map[string]string{"string": "string"}); len(tags) != 0 {
		t.Fatalf("nil analyzer should return no tags: %+v", tags)
	}
	MetadataTypeTagAnalyzer = func(props struct {
		Errors  *[]MetadataFactory_IError
		Type    string
		Objects []*schemametadata.MetadataObjectType
		Explore MetadataFactory_IExplore
	}) []schemametadata.IMetadataTypeTag {
		if props.Type != "string" || len(props.Objects) != 1 {
			t.Fatalf("unexpected analyzer props: %+v", props)
		}
		return []schemametadata.IMetadataTypeTag{{Name: "Format<uuid>"}}
	}
	if tags := iterate_metadata_intersection_analyze_type_tags(IMetadataIteratorProps{}, []*schemametadata.MetadataObjectType{tagObject("target", "kind", "value")}, map[string]string{"string": "string"}); len(tags) != 1 {
		t.Fatalf("registered analyzer should return one tag: %+v", tags)
	}
}
