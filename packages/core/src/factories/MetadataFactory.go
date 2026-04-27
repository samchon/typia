package factories

type metadataFactory struct{}

var MetadataFactory metadataFactory

func (metadataFactory) Analyze(props MetadataAnalyzeProps) ValidationPipe {
	components := props.Components
	if components == nil {
		components = NewMetadataCollection()
	}
	options := props.Options
	metadata := ExploreMetadata(ExploreMetadataProps{
		Options:    options,
		Checker:    props.Checker,
		Components: components,
		Errors:     &MetadataErrors{},
		Type:       props.Type,
		Explore:    InitialExplore(),
	})
	errors := MetadataErrors{}
	if options.Validate != nil {
		for _, message := range options.Validate(MetadataValidateProps{Metadata: metadata, Explore: InitialExplore()}) {
			errors.Add(MetadataError{Name: metadata.GetName(), Explore: InitialExplore(), Messages: []string{message}})
		}
	}
	if len(errors) != 0 {
		return ValidationPipe{Success: false, Errors: errors}
	}
	return ValidationPipe{Success: true, Data: metadata}
}

func (metadataFactory) Validate(meta *MetadataSchema, validate MetadataValidator) MetadataErrors {
	if validate == nil {
		return nil
	}
	errors := MetadataErrors{}
	for _, message := range validate(MetadataValidateProps{Metadata: meta, Explore: InitialExplore()}) {
		errors.Add(MetadataError{Name: meta.GetName(), Explore: InitialExplore(), Messages: []string{message}})
	}
	return errors
}
