DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd ${DIR}
java -jar ../compiler.jar \
	--js ./cloudgen.js \
	--js_output_file ./cloudgen-min.js
