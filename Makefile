install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

start_even:
	npm run babel-node -- src/bin/brain-even.js

publish:
	npm publish

lint:
	npm run eslint src/** --fix

.PHONY: install start publish lint start_even