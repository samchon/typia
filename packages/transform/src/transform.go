package transform

func Transform(props ITransformProps) ITransformResult {
	return transform(props)
}

func transform(props ITransformProps) ITransformResult {
	return FileTransformer.transform(props)
}
