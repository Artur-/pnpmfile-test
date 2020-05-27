```
git clone https://github.com/Artur-/pnpmfile-test
cd pnpmfile-test

# Install @vaadin/vaadin-date-picker 4.1.0, defined in package.json and pnpmfile.js
pnpm i

sed -i "s/4.1.0/4.1.1/" pnpmfile.js # Update forced version to 4.1.1

# Install again
pnpm i

# Now lock file contains both 4.1.0 and 4.1.1, it should not

# Remove lock file and node_modules
rm -rf node_modules pnpm-lock.yaml

# Install again
pnpm i

# Now lock file only contains 4.1.1, as it should
