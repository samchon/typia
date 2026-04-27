package factories

import "fmt"

type metadataTypeTagFactory struct{}

var MetadataTypeTagFactory metadataTypeTagFactory

func (metadataTypeTagFactory) Analyze(props MetadataTypeTagAnalyzeProps) []MetadataTypeTag {
	output := make([]MetadataTypeTag, 0)
	for _, object := range props.Objects {
		for _, property := range object.Properties {
			if property.Key.GetSoleLiteral() == "typia.tag" {
				output = append(output, objectToTypeTags(property.Value, props.Type, props.Errors, props.Explore)...)
			}
		}
	}
	return output
}

func (metadataTypeTagFactory) Validate(props MetadataTypeTagValidateProps) bool {
	seen := map[string]MetadataTypeTag{}
	for _, tag := range props.Tags {
		key := fmt.Sprintf("%s:%v", tag.Kind, tag.Value)
		if previous, ok := seen[key]; ok && previous.Exclusive {
			message := fmt.Sprintf("conflict between %s and %s", previous.Name, tag.Name)
			return props.Report(ValidateReportProps{Message: message})
		}
		if tag.Target != "" && tag.Target != props.Type {
			target := "target"
			return props.Report(ValidateReportProps{Property: &target, Message: "must be " + props.Type})
		}
		seen[key] = tag
	}
	return true
}

func (metadataTypeTagFactory) Is(object MetadataObjectType) bool {
	for _, property := range object.Properties {
		if property.Key.GetSoleLiteral() == "typia.tag" {
			return true
		}
	}
	return false
}

func objectToTypeTags(metadata *MetadataSchema, target string, errors *MetadataErrors, explore MetadataExplore) []MetadataTypeTag {
	if metadata == nil {
		return nil
	}
	tags := make([]MetadataTypeTag, 0)
	for _, constant := range metadata.Constants {
		for _, value := range constant.Values {
			tags = append(tags, MetadataTypeTag{Name: fmt.Sprintf("%v", value.Value), Target: target, Kind: constant.Type, Value: value.Value, Validate: fmt.Sprintf("%v", value.Value), Exclusive: true})
		}
	}
	if len(tags) == 0 && errors != nil {
		errors.Add(MetadataError{Name: "typia.tag", Explore: explore, Messages: []string{"empty type tag"}})
	}
	return tags
}
