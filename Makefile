VERSION := patch

release:
	echo "Releasing version: $(VERSION)"
	git reset --hard
	git checkout master
	git pull origin master
	npm install
	npm run check
	git add package-lock.json
	git commit -m "updated package-lock"
	npm version $(VERSION)
	npm publish
	git push --follow-tags
