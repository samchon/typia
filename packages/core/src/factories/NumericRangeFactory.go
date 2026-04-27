package factories

import "math"

type numericRangeFactory struct{}

var NumericRangeFactory numericRangeFactory

func (numericRangeFactory) Minimum(tags []MetadataTypeTag) *float64 {
	var output *float64
	for _, tag := range tags {
		if tag.Kind != "minimum" && tag.Kind != "exclusiveMinimum" {
			continue
		}
		value, ok := toFloat(tag.Value)
		if !ok {
			continue
		}
		if output == nil || value > *output {
			copied := value
			output = &copied
		}
	}
	return output
}

func (numericRangeFactory) Maximum(tags []MetadataTypeTag) *float64 {
	var output *float64
	for _, tag := range tags {
		if tag.Kind != "maximum" && tag.Kind != "exclusiveMaximum" {
			continue
		}
		value, ok := toFloat(tag.Value)
		if !ok {
			continue
		}
		if output == nil || value < *output {
			copied := value
			output = &copied
		}
	}
	return output
}

func (numericRangeFactory) Step(tags []MetadataTypeTag) *float64 {
	for _, tag := range tags {
		if tag.Kind == "multipleOf" {
			value, ok := toFloat(tag.Value)
			if ok && value != 0 && !math.IsNaN(value) {
				return &value
			}
		}
	}
	return nil
}
