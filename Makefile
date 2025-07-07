.PHONY: serve test lint help

help:
	@echo "Common targets:"
	@echo "  serve - run a local development server"
	@echo "  test  - run project tests (if any)"
	@echo "  lint  - run lint checks (if any)"

serve:
	python3 -m http.server 8000

test:
	@echo "No tests defined."

lint:
	@echo "No linting configured."
