VERSION := patch

release:
	echo "Releasing version: $(VERSION)"
	git reset --hard
	git checkout master
	git pull origin master
	npm install
	npm run check
	npm version $(VERSION)
	npm publish
	git push --follow-tags
