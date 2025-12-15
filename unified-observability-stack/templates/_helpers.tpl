{{- define "uos.name" -}}
{{ .Chart.Name }}
{{- end }}

{{- define "uos.fullname" -}}
{{ printf "%s-%s" .Release.Name .Chart.Name }}
{{- end }}
