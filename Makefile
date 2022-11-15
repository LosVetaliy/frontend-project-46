gendiff:
	node bin/gendiff.js -h
install:
	npm ci
	npm link
publish:
	npm publish --dry-run
lint:
	npx eslint .
fix: 
	npx eslint --fix .
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --bail --coverage --coverageProvider=v8
