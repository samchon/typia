package http

var HttpAssertFormDataProgrammer = httpAssertFormDataProgrammerNamespace{}

type httpAssertFormDataProgrammerNamespace struct{}

func (httpAssertFormDataProgrammerNamespace) Write(typeText string) string {
	return httpAssertWrap("http.assertFormData", httpDecodeFormDataFunction(), typeText)
}
