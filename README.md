### Hexlet tests and linter status:
[![Actions Status](https://github.com/VictoriaBoyarkina/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/VictoriaBoyarkina/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/c1b5c772154670f0a1e9/maintainability)](https://codeclimate.com/github/VictoriaBoyarkina/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/c1b5c772154670f0a1e9/test_coverage)](https://codeclimate.com/github/VictoriaBoyarkina/frontend-project-46/test_coverage)

# Gendiff for nested structures
## formats: json, yaml


### stylish
	gendiff file1.json file2.json gendiff file1.json file2.json -f stylish
	gendiff file1.yaml file2.yaml
	gendiff file1.yaml file2.yaml -f stylish`

[![asciicast](https://asciinema.org/a/S22qCE5hsIf40CduaGonyBSOc.svg)](https://asciinema.org/a/S22qCE5hsIf40CduaGonyBSOc)

### plain
	gendiff file1.json file2.json -f plain/n
	gendiff file1.yaml file2.yaml -f plain

[![asciicast](https://asciinema.org/a/Ra0lm4qrOaMBLoulqJIqEIug8.svg)](https://asciinema.org/a/Ra0lm4qrOaMBLoulqJIqEIug8)

### json
	gendiff file1.json file2.json -f json
	gendiff file1.yaml file2.yaml -f json

[![asciicast](https://asciinema.org/a/1KB0LrjMRrM8AzmqyZqDLHLnb.svg)](https://asciinema.org/a/1KB0LrjMRrM8AzmqyZqDLHLnb)
